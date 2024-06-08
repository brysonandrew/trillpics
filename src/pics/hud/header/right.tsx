import { FC } from "react";
import { boxSize } from "~uno/rules/box/size";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { LinesTopRight } from "~/components/lines/top-right";
import { HeaderSubtitle } from "~/pics/header/subtitle";
import { THudContainer } from "~/pics/hud";

type TProps = {
  container: THudContainer;
  foundation: DOMRect;
};
export const PicsHudHeaderRight: FC<
  TProps
> = ({ foundation, container }) => {
  const s = boxSize();
  return (
    <div
      key="header-right"
      className="absolute row-start h-0"
      style={{
        left: foundation.width + s.m05,
        width:
          container.width -
          foundation.width,
        top: s.m05,
        gap: s.m05,
      }}
    >
      <LinesHorizontal classValue="hidden lg:flex" sizeClass='border-t' />
      <HeaderSubtitle classValue="hidden lg:flex" />
      <LinesTopRight
        container={container}
      />
    </div>
  );
};
