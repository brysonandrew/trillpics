import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { PillB } from "~/components/buttons/pill/b";
import { IconsGenerate } from "~/components/icons/video/generate";
import { trpc } from "~/utils/trpc";
import { TGenerateProps } from "~/server/generate";
import { downloadMedia } from "~/pages/video/player/_header/generate/download-media";
import { AURA } from "@brysonandrew/svg-filter";
import { resolvePresence } from "~/utils/animation";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TextureMetal } from "@brysonandrew/texture-metal";
import { TGenerateInput } from "~/types/trpc/generate";
import { useHoverKey } from "~/hooks/use-hover-key";
import { boxStyle } from "~/constants/box/style";
import { usePicVideo } from "~/hooks/pic/video";

const DEFAULT: TGenerateInput = {
  input: {
    pics: [],
    count: 0,
    seconds: 1,
  },
  fps: 3,
};

export const Generate = () => {
  const { fps } = useTrillPicsStore(
    ({ fps }) => ({
      fps,
    })
  );
  const { names, seconds, count } =
    usePicVideo();
  const { handlers, isHover } =
    useHoverKey();
  const config: TGenerateProps = {
    input: {
      pics:names,
      seconds,
      count,
    },
    fps,
  };
  const borderStyle = boxStyle({
    layer: "flat",
    borderRadius: "xl",
    size: "m",
  });

  const title = "Generate";

  // const dl = async (blob: Blob) => {};

  // const mutationFn: MutationFunction<
  //   TRenderMediaResult,
  //   TGenerateInput
  // > = async (input) => {
  //   return null as any;
  // };

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
    console.log(config);

    mutate(config);
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

  return (
    <div className="relative h-0">
      <AnimatePresence>
        {isAura && (
          <>
            <motion.div
              key={resolveCompositeKey(
                isHover.toString(),
                isLoading.toString()
              )}
              className="absolute -inset-1 ml-1 mt-0 _gradient-radial"
              style={{
                filter:
                  AURA.GLOBAL.value,
                ...borderStyle,
              }}
              {...AURA_TRANSITION}
            />
            <TextureMetal
              key="background"
              className="fill h-10"
              style={borderStyle}
              {...AURA_TRANSITION}
            />
          </>
        )}
      </AnimatePresence>
      <PillB
        title="Generate video"
        circleProps={{
          isGlow: isSuccess,
          ...{
            transition: {
              repeat: Infinity,
              repeatDelay: 0.8,
              duration: isHover(title)
                ? 0.8
                : 0,
            },
            ...resolvePresence(
              { opacity: 0 },
              { opacity: [0, 1] }
            ),
          },
        }}
        Icon={IconsGenerate}
        onClick={handleGenerate}
        {...handlers(title)}
      >
        Generate
      </PillB>
    </div>
  );
};
