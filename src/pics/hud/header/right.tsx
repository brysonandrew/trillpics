import { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesHorizontal } from "~/pages/video/_common/footer/left/lines/horizontal";
import { LinesTopRight } from "~/pages/video/_common/footer/left/lines/top-right";
import { HeaderSubtitle } from "~/pics/header/subtitle";

type TProps = {
  isIdle: boolean
  dimensions: TDimensions;
  foundation: DOMRect;
};

export const PicsHudHeaderRight: FC<
  TProps
> = ({
  foundation,
  dimensions,
}) => {
  const s = boxSize();
  return (
    <div
      key="header-right"
      className="absolute row h-0"
      style={{
        left: foundation.width + s.m,
        width:
        dimensions.width -
          foundation.width -
          s.m * 1.5,
        top: s.m05,
        gap: s.m05,
      }}
    >
      <LinesHorizontal classValue="hidden lg:flex" />
      <HeaderSubtitle classValue="hidden lg:flex" />
      <LinesTopRight dimensions={dimensions} />
    </div>
  );
};
