import type { FC } from "react";
import { motion } from "framer-motion";
import { useSoundContext } from "~/shell/global/sound";
import { IconsMute } from "~/components/icons/playback/mute";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { useHoverKey } from "~/hooks/use-hover-key";
import { LayoutOverlay } from "~/components/layout/overlay";
import { IconsUnmute } from "~/components/icons/playback/unmute";
const key = "NavCountersMusic";

export const NavCountersMusic: FC =
  () => {
    const { audio } =
      useSoundContext();
    const s = boxSize();
    const borderRadius = boxRadius();
    const { motionHandlers, isHover } =
      useHoverKey();
    const isHovering = isHover(key);

    if (audio) {
      return (
        <div className="absolute top-0 right-0">
          <IconsUnmute />
        </div>
      );
    }
    return (
      <>
        <motion.div
          className="center absolute -top-3 -left-3 cursor-pointer z-10"
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
