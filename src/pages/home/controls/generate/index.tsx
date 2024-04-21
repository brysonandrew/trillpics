import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useVideoStore } from "src/store";
import { PillB } from "~/components/buttons/pill/b";
import { IconsGenerate } from "~/components/icons/video/generate";
import { trpc } from "~/utils/trpc";
import { TGenerateProps } from "~/server/generate";
import { downloadMedia } from "~/pages/home/controls/generate/download-media";
import {
  NONE_CURSOR_KEY,
  useHoverKey,
} from "@brysonandrew/motion-cursor";
import { AURA } from "@brysonandrew/svg-filter";
import { resolvePresence } from "@brysonandrew/motion-core";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";
import { Metal } from "@brysonandrew/texture-metal";

export const Generate = () => {
  const { videoPics, fps } =
    useVideoStore();
  const { isHover, handlers } =
    useHoverKey(
      NONE_CURSOR_KEY,
      "generate"
    );
  const config: TGenerateProps = {
    input: { pics: videoPics },
    fps,
  };
  const {
    isError,
    isIdle,
    isLoading,
    isPaused,
    isSuccess,
    mutateAsync,
  } = trpc.generate.useMutation({
    g: "hi",
  });
  const handleGenerate = async () => {
    const result = await mutateAsync({
      x: "bye",
    });
    if (!result) return;
    // const arr = new Uint8Array(
    //   result.buffer?.data ?? []
    // );
    // const blob = new Blob([arr]);
    // await downloadMedia(blob);
  };
  const isAura = isHover || isLoading;
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
  const borderStyle =
    useBorderStyleMd();
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
              className="fill ml-1 mt-0.25 _radial-gradient"
              style={{
                filter:
                  AURA.GLOBAL.value,
                ...borderStyle,
              }}
              {...AURA_TRANSITION}
            />
            <Metal
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
              duration: isHover
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
        {...handlers}
      >
        Generate
      </PillB>
    </div>
  );
};
