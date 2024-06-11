import type { FC } from "react";
import { motion } from "framer-motion";
import { useSoundContext } from "~/shell/global/sound";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsMute } from "~/components/icons/playback/mute";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { useHoverKey } from "~/hooks/use-hover-key";
import { LayoutOverlay } from "~/components/layout/overlay";
const key = "NavCountersMusic";

export const NavCountersMusic: FC =
  () => {
    const { audioSrc } =
      useSoundContext();
    const s = boxSize();
    const borderRadius = boxRadius();
    const { motionHandlers, isHover } =
      useHoverKey();
    const isHovering = isHover(key);

    if (audioSrc) {
      return (
        <div className="absolute top-0 right-0">
          <IconsPlay />
        </div>
      );
    }
    return (
      <>
        <motion.div
          className="center absolute -top-3 -left-3 cursor-pointer"
          style={{
            width: s.m07,
            height: s.m07,
            borderRadius,
          }}
          {...motionHandlers(key)}
        >
          <div
            className="fill _gradient-mesh opacity-20"
            style={{
              borderRadius,
            }}
          />
          <IconsMute size={16} />
        </motion.div>
        {isHovering && (
          <LayoutOverlay>
            No audio track recorded
          </LayoutOverlay>
        )}
      </>
    );
  };
