import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsMute } from "~/components/icons/playback/mute";
import { boxRadius } from "~uno/rules/box/radius";
import { IconsTick } from "~/components/icons/tick";
import { LayoutBox } from "~/components/layout/box";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";
import { useTrillPicsStore } from "~/store/middleware";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { box } from "~uno/rules/box";
import { LayoutOverlay } from "~/components/layout/overlay";
import { IconsCheckboxEmpty } from "~/components/icons/inputs/checkbox/empty";

type TProps = { isHovering: boolean };
export const NavCountersMusic: FC<
  TProps
> = ({ isHovering }) => {
  const { recording } =
    useTrillPicsStore(
      ({ recording }) => ({
        recording,
      })
    );
  const s = box;
  const borderRadius = boxRadius();

  if (recording) {
    return (
      <div className="absolute -top-2 -right-2 z-10 pointer-events-none">
        <div
          className="relative"
          style={{
            width: box.m05,
            height: box.m05,
            borderRadius,
          }}
        >
          <BackgroundMeshRadialFlat />
          <IconsTick />
          <>
            {isHovering && (
              <LayoutOverlay>
                Soundtrack added
              </LayoutOverlay>
            )}
          </>
        </div>
      </div>
    );
  }
  return (
    <motion.div
      className="center absolute -top-2 -left-2 cursor-pointer z-10 pointer-events-none"
      style={{
        width: box.m05,
        height: box.m05,
        borderRadius,
      }}
    >
      <>
        {isHovering && (
          <LayoutOverlay>
            No soundtrack
          </LayoutOverlay>
        )}
      </>
      <div
        className="fill _bi-mesh opacity-100"
        style={{
          borderRadius,
        }}
      />
      <LayoutBox>
        <IconsMute size={16} />
      </LayoutBox>
    </motion.div>
  );
};
