import { FC } from "react";
import { motion } from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";
import { PicsFloatingShuffle } from "~/pics/floating/shuffle";
import { TMeasureContainerResult } from "~/shell/init/container";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { PillBStill } from "~/components/buttons/pill/b/still";
import { IconsCross } from "~/components/icons/cross";
import { boxSize } from "~/constants/box/size";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = {
  origin: DOMRect;
  dimensions: TDimensions;
};
export const PicsHudLeft: FC<
  TProps
> = ({ origin, dimensions }) => {
  const bSize = boxSize();

  return (
    <motion.div
      key="main-left"
      className="absolute column w-0 top-0 z-0"
      style={{
        left: bSize.m05,
        gap: bSize.m05,
        top: origin.height + bSize.m05,
        height:
          dimensions.height -
          origin.height - bSize.m05,
      }}
      {...PRESENCE_OPACITY}
    >
      <LinesVertical classValue="opacity-50" />
      <PicsFloatingShuffle />
      <LinesVertical classValue="opacity-50" /> 
      <PillBStill
        title="x"
        style={{opacity:0.2}}
        Icon={IconsCross}
      />
    </motion.div>
  );
};
