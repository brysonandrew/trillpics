import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { useContextGrid } from "~/context";
import { LinesHorizontal } from "~/pages/video/_common/footer/left/lines/horizontal";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { HudLeftShuffle } from "~/pics/hud/left/shuffle";
import { useTrillPicsStore } from "~/store/middleware";

export const GridOptions: FC = () => {
  const { foundationValue, isIdle } =
    useContextGrid();
  const { isScroll, screen } =
    useTrillPicsStore(
      ({ isScroll, screen }) => ({
        isScroll,
        screen,
      })
    );
  if (
    !foundationValue ||
    !screen.isDimensions
  )
    return null;
  const s = boxSize();
  const isScrollTopShown = isScroll; // && isVerticalScroll;
  return (
    <div
      className="absolute left-0 top-0 z-50 row shrink-0 justify-start"
      style={{
        left:
          screen.container.left +
          s.m15,
        gap: s.m025,
        width: s.m3,
        top:
          foundationValue?.top +
          foundationValue?.height +
          s.m025,
      }}
    >
      <HudLeftShuffle
        isLabel={isIdle}
      />
      {isScrollTopShown && (
        <>
          <LinesHorizontal />
          <PicsHeaderScrollTop
            isLabel={isIdle}
          />
        </>
      )}
    </div>
  );
};
