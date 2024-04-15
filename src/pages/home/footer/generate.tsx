import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useVideoStore } from "src/store";
import { Button } from "@pages/home/footer/button";
import { IconsGenerate } from "@components/icons/generate";
import { trpc } from "@/utils/trpc";
import { TGenerateConfig } from "@/server/remotion/generate";
import { downloadMedia } from "@/pages/home/footer/download-media";
import {
  NONE_CURSOR_KEY,
  useHoverKey,
} from "@brysonandrew/cursor";
import { AURA } from "@brysonandrew/svg-filter";
import { resolvePresence } from "@brysonandrew/animation";
import { resolveCompositeKey } from "@brysonandrew/utils-key";

export const Generate = () => {
  const { videoPics, fps } =
    useVideoStore();
  const { isHover, handlers } =
    useHoverKey(
      NONE_CURSOR_KEY,
      "generate"
    );
  const config: TGenerateConfig = {
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
  } = trpc.generate.useMutation();
  const handleGenerate = async () => {
    const result = await mutateAsync(
      config as any
    );
    const arr = new Uint8Array(
      result.buffer?.data ?? []
    );
    const blob = new Blob([arr]);
    await downloadMedia(blob);
  };
  return (
    <div
      className="relative"
      style={{
        mixBlendMode: "exclusion",
      }}
    >
      <AnimatePresence>
        {(isHover || isLoading) && (
          <motion.div
            key={resolveCompositeKey(
              isHover.toString(),
              isLoading.toString()
            )}
            className="fill rounded-full absolute -inset-y-4 mt-1.5 -ml-4 _radial-gradient"
            style={{
              filter: AURA.GLOBAL.value,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            {...resolvePresence(
              { opacity: 0 },
              {
                opacity: 0.5,
                scale: 1,
              }
            )}
          />
        )}
        <motion.div>
          <Button
            key={`${isLoading}`}
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
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
