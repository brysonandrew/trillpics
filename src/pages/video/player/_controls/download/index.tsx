import { FC } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { TPillBProps } from "~/components/buttons/pill/b";
import { trpc } from "~/utils/trpc";
import { downloadMedia } from "~/pages/video/player/_controls/download/media";
import { AURA } from "@brysonandrew/svg-filter";
import { resolvePresence } from "~/utils/animation";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
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

export const DEFAULT_INPUT: TGenerateInput =
  {
    fps: DEFAULT_FPS,
    durationInFrames: 1,
    pics: [],
    count: 0,
    seconds: 1,
    isPics: false,
    dimensions: { ...PIC_DIMENSIONS },
  };

export const Download: FC<
  Partial<TPillBProps>
> = ({ children, ...props }) => {
  const s = boxSize();
  const input = usePicVideoReadInputs();
  const { set } = useTrillPicsStore(
    ({ set }) => ({ set })
  );
  const { handlers, isHover } =
    useHoverKey();

  const title = "Download video";

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
  const { trigger } = useTimebomb(
    1400,
    () => {
      set({
        download: null,
        progress: null,
        error: null,
        logs: [],
        isDownloadComplete: true,
      });
      trigger1();
    }
  );

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
  const handleGenerate = () => {
    console.log(input);
    set({ logs: [], progress: null });
    mutate(input);
  };

  const isAura =
    isHover(title) || isLoading;
  const AURA_TRANSITION = {
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
    ...resolvePresence(
      { opacity: 0 },
      {
        opacity: 0.9,
      }
    ),
  };
  const isHovering = isHover(title);

  return (
    <div
      className="relative flex"
      style={{ ...resolveSquare(s.m) }}
    >
      <>
        <AnimatePresence>
          {(isAura || isHovering) && (
            <>
              <motion.div
                key={resolveCompositeKey(
                  isHover.toString(),
                  isLoading.toString()
                )}
                className="fill _gradient-radial"
                style={{
                  filter:
                    AURA.GLOBAL.value,
                  scaleX: 1.2,
                  scaleY: 1.1,
                  x: 2,
                }}
                {...AURA_TRANSITION}
              />
            </>
          )}
        </AnimatePresence>
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
      </>
    </div>
  );
};
