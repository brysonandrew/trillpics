import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { useVideoStore } from "src/store";
import { PillB } from "@/components/interactive/pill/b";
import { IconsGenerate } from "@components/icons/generate";
import { trpc } from "@/utils/trpc";
import { TGenerateConfig } from "@/server/remotion/generate";
import { downloadMedia } from "@/pages/home/controls/generate/download-media";
import {
  NONE_CURSOR_KEY,
  useHoverKey,
} from "@brysonandrew/cursor";
import { AURA } from "@brysonandrew/svg-filter";
import {
  PRESENCE_OPACITY,
  PRESENCE_OPACITY_DELAY,
  resolvePresence,
  TRANSITION_02_EASEIN_008,
} from "@brysonandrew/animation";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { Background1 } from "@/components/decoration/background-1";
import { Background04 } from "@/components/decoration/background-04";
import { Metal } from "@/components/metal";
import { MetalDark } from "@/components/metal/MetalDark";
import { MetalDarkest } from "@/components/metal/MetalDarkest";
import { useApp } from "@brysonandrew/app";

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
  const { BORDER_RADIUS } = useApp();
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
  return (
    <div className="relative">
      <AnimatePresence>
        {isAura && (
          <>
            <motion.div
              key={resolveCompositeKey(
                isHover.toString(),
                isLoading.toString()
              )}
              className="fill absolute -inset-y-1.5 -inset-x-1.5 ml-1 mt-0.25 _radial-gradient"
              style={{
                borderRadius:
                  BORDER_RADIUS.XL,
                filter:
                  AURA.GLOBAL.value,
              }}
              {...AURA_TRANSITION}
            />
            <Metal
              key="background"
              className="fill h-10"
              style={{
                borderRadius:
                  BORDER_RADIUS.XL,
              }}
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
