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
import { boxStyle } from "~/constants/box/style";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { IconsDownload } from "~/components/icons/download";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { boxSize } from "~/constants/box/size";
import { resolveSquare } from "@brysonandrew/measure";
import {
  DEFAULT_FPS,
  PIC_DIMENSIONS,
} from "~/constants/remotion";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";

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
  const { fps } =
    useContextPlayer_Init();
  const s = boxSize();
  const input = usePicVideoReadInputs();
  const { handlers, isHover } =
    useHoverKey();

  const {
    width,
    minWidth,
    ...borderStyle
  } = boxStyle({
    layer: "flat",
    borderRadius: "xl",
    size: "m",
  });

  const title = "Download video";

  // const dl = async (blob: Blob) => {};

  // const mutationFn: MutationFunction<
  //   TRenderMediaResult,
  //   TGenerateInput
  // > = async (input) => {
  //   return null as any;
  // };
  const x =
    trpc.onProgress.useSubscription();
  // const y =
  //   trpc.randomNumber.useSubscription({
  //     onData() {
  //       console.log(state); // initial
  //     },
  //   });

  //   trpc.socket.useSubscription({

  // })
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
      }
    },
  });
  const handleGenerate = () => {
    // input.onProgress = (
    //   ...args: any[]
    // ) => {
    //   console.log(args);
    // };
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
                  ...borderStyle,
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
