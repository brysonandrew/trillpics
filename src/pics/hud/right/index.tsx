import {
  FC,
  PropsWithChildren,
} from "react";
import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { TMeasureContainerResult } from "~/shell/init/container";
import { boxSize } from "~/constants/box/size";
import { HideControls } from "~/pics/header/right/zen-mode";
import { DarkMode } from "~/pics/header/right/dark-mode";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = {
  foundation: DOMRect;
  dimensions: TDimensions;
  isIdle: boolean;
};
export const PicsHudRight: FC<
  PropsWithChildren<TProps>
> = ({
  children,
  foundation,
  dimensions,
  isIdle,
}) => {
  const s = boxSize();

  const ptop =
    dimensions.height / 8 + s.m025 / 2;
  const pheight =
    dimensions.height / 4 + s.m025;

  const top =
    ptop + pheight - foundation.height;
  return (
    <LayoutGroup>
      <motion.div
        className="absolute flex flex-col items-star justify-evenly w-0 bg-red"
        style={{
          right: 0,
          top,
          gap: s.m05,
          height:
            dimensions.height -
            top +
            s.m025,
        }}
      >
        <div
          className="relative flex flex-col items-end justify-evenly shrink-0 w-0"
          style={{
            gap: s.m05,
            height: s.m4,
          }}
        >
          <DarkMode isLabel={isIdle} />
          <LinesVertical
            style={{ left: -s.m05 }}
          />
          <HideControls
            isLabel={isIdle}
          />
          {children}
        </div>
        <LinesVertical
          style={{ left: -s.m05 }}
        />
      </motion.div>
    </LayoutGroup>
  );
};
