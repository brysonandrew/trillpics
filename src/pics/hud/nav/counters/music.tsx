import type { FC } from "react";
import { motion } from "framer-motion";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { IconsMute } from "~/components/icons/playback/mute";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { useHoverKey } from "~/hooks/use-hover-key";
import { LayoutOverlay } from "~/components/layout/overlay";
import { IconsTick } from "~/components/icons/tick";
import { LayoutBox } from "~/components/layout/box";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";
import { useTrillPicsStore } from "~/store/middleware";
const key = "NavCountersMusic";

export const NavCountersMusic: FC =
  () => {
    const { recording } =
      useTrillPicsStore(
        ({ recording }) => ({
          recording,
        })
      );
    const s = boxSize();
    const borderRadius = boxRadius();
    const { motionHandlers, isHover } =
      useHoverKey();
    const isHovering = isHover(key);

    if (recording) {
      return (
        <div className="absolute -top-2 -right-2 z-10">
          <div
            className="relative"
            style={{
              width: s.m05,
              height: s.m05,
              borderRadius,
            }}
          >
            <BackgroundMeshRadialFlat />
            <IconsTick />
          </div>
        </div>
      );
    }
    return (
      <>
        <motion.div
          className="center absolute -top-1 -right-1 cursor-pointer z-10"
          style={{
            width: s.m05,
            height: s.m05,
            borderRadius,
          }}
          {...motionHandlers(key)}
        >
          <div
            className="fill _gradient-mesh opacity-100"
            style={{
              borderRadius,
            }}
          />
          <LayoutBox>
            <IconsMute size={16} />
          </LayoutBox>
        </motion.div>
        {isHovering && (
          <LayoutOverlay>
            No recording track recorded
          </LayoutOverlay>
        )}
      </>
    );
  };
