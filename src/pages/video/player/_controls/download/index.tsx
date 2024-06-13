import { FC, useEffect } from "react";
import { TPillBProps } from "~/components/buttons/pill/b";
import { trpc } from "~/utils/trpc";
import { downloadMedia } from "~/pages/video/player/_controls/download/media";
import { resolvePresence } from "~/utils/animation";
import { TGenerateInput } from "~/types/trpc/generate";
import { useHoverKey } from "~/hooks/use-hover-key";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { IconsDownload } from "~/components/icons/download";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { boxSize } from "~uno/rules/box/size";
import { resolveSquare } from "@brysonandrew/measure";
import {
  DEFAULT_FPS,
  PIC_DIMENSIONS,
} from "~/constants/remotion";
import { useTrillPicsStore } from "~/store/middleware";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { UGenerateSubscriptionResult } from "~/store/state/generate/types";
import { TState } from "~/store/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { TPicSeriesProps } from "~/components/remotion/pic-series/types";

export const DEFAULT_INPUT: TGenerateInput =
  {
    fps: DEFAULT_FPS,
    durationInFrames: 1,
    pics: [],
    count: 0,
    seconds: 1,
    isPics: false,
    dimensions: { ...PIC_DIMENSIONS },
    recording: null
  };

export const Download: FC<
  Partial<TPillBProps>
> = ({ children, ...props }) => {
  const s = boxSize();
  const inputFromParams =
    usePicVideoReadInputs();
  const { set, recording } =
    useTrillPicsStore(
      ({ set, recording }) => ({
        set,
        recording,
      })
    );
  const { handlers, isHover } =
    useHoverKey();
  const title = "Download video";
  // console.log(audioBlob);
  // const dl = async (blob: Blob) => {};

  // const mutationFn: MutationFunction<
  //   TRenderMediaResult,
  //   TGenerateInput
  // > = async (input) => {
  //   return null as any;
  // };
  trpc.progress.useSubscription(
    {},
    {
      onData: ({
        type,
        data,
      }: UGenerateSubscriptionResult) => {
        switch (type) {
          case "progress": {
            set({ progress: data });
            break;
          }
          case "log": {
            if (data) {
              set((prev: TState) => ({
                logs: [
                  ...prev.logs,
                  data,
                ],
              }));
            }
            break;
          }
          case "download": {
            set({ download: data });
            break;
          }
        }
      },
      onError: (v: any) => {
        set({ error: v });
      },
    }
  );
  const { trigger: trigger1 } =
    useTimebomb(2800, () =>
      set({
        isDownloadComplete: false,
      })
    );
  const reset = (partial = {}) =>
    set({
      download: null,
      progress: null,
      error: null,
      logs: [],
      ...partial,
    });
  const { trigger } = useTimebomb(
    1400,
    () => {
      reset({
        isDownloadComplete: true,
      });
      trigger1();
    }
  );

  useEffect(() => {
    return reset;
  }, []);

  const {
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutate,
  } = trpc.generate.useMutation({
    onSuccess: async (result) => {
      if (!result) return;
      if (
        result.buffer &&
        "data" in result.buffer &&
        Array.isArray(
          result.buffer.data
        )
      ) {
        const arr = new Uint8Array(
          result.buffer.data ?? []
        );
        const blob = new Blob([arr]);
        await downloadMedia(blob);
        trigger();
      }
    },
  });
  const input: TPicSeriesProps = {
    ...inputFromParams,
    recording,
  };
  const handleGenerate = () => {
    console.log(
      "handleGenerate ",
      input
    );

    set({ logs: [], progress: null });
    mutate({
      // ...(audioBlob && audioBlob instanceof
      //   ? {
      //       recording:
      //         window.URL.createObjectURL(
      //           audioBlob
      //         ),
      //     }
      //   : {}),
      ...input,
    });
  };

  const isHovering = isHover(title);

  return (
    <div
      className="relative flex"
      style={{ ...resolveSquare(s.m) }}
    >
      <PillBHover
        title={title}
        isSelected={isHovering}
        style={{
          ...resolveSquare(s.m),
        }}
        circleProps={{
          isGlow: isSuccess,
          ...{
            transition: {
              repeat: Infinity,
              repeatDelay: 0.8,
              duration: isHovering
                ? 0.8
                : 0,
            },
            ...resolvePresence(
              { opacity: 0 },
              { opacity: [0, 1] }
            ),
          },
        }}
        Icon={IconsDownload}
        onClick={handleGenerate}
        {...props}
        {...handlers(title)}
      >
        {title}
      </PillBHover>
    </div>
  );
};
