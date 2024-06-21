import type { FC } from "react";
import { motion } from "framer-motion";
import { IconsMute } from "~/components/icons/playback/mute";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { IconsTick } from "~/components/icons/tick";
import { LayoutBox } from "~/components/layout/box";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";
import { useTrillPicsStore } from "~/store/middleware";
import { LightingGlow } from "~/components/layout/lighting/glow";
import { TypographyXxs } from "~/components/layout/typography/xxs";
import { PillBText } from "~/components/buttons/pill/b/text";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import clsx from "clsx";
import { box } from "~uno/rules/box";

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
    <motion.div
      className="center absolute -top-2 -left-2 cursor-pointer z-10 pointer-events-none"
      style={{
        width: s.m05,
        height: s.m05,
        borderRadius,
      }}
    >
      {isHovering ? (
        <LightingGlow />
      ) : null}

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
  );
};
