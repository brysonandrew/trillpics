import { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { TDimensions } from "@brysonandrew/config-types";
import { LinesHorizontal } from "~/pages/video/_common/footer/nav/lines/horizontal";
import { LinesTopRight } from "~/pages/video/_common/footer/nav/lines/top-right";
import { HeaderSubtitle } from "~/pics/header/subtitle";

type TProps = {
  dimensions: TDimensions;
  origin: DOMRect;
};

export const PicsHudHeaderRight: FC<
  TProps
> = ({
  origin,
  dimensions: { width },
}) => {
  const bSize = boxSize("s");
  return (
    <div
      key="header-right"
      className="absolute row gap-6 h-0"
      style={{
        left: origin.width + bSize.m05,
        width:
          width -
          origin.width -
          bSize.m,
        top: bSize.m05,
      }}
    >
      <LinesHorizontal classValue="hidden lg:flex opacity-50" />
      <HeaderSubtitle classValue="hidden lg:flex opacity-50" />
      <LinesTopRight />
    </div>
  );
};
