import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { useContextReady } from "~/shell/ready/context";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { HudLeftShuffle } from "~/pics/hud/left/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { withControlsCheck } from "~/store/hocs/with-controls-check";
import { LinesVertical } from "~/components/lines/vertical";
import { PicsHudLeftLine } from "~/pics/hud/left/line";

export const GridOptions: FC =
  withControlsCheck(() => {
    const {
      foundationValue,
      screen,
    } = useContextReady();
    const { isScroll } =
      useTrillPicsStore(
        ({ isScroll }) => ({
          isScroll,
        })
      );
    if (!foundationValue) return null;
    const s = boxSize();
    const isScrollTopShown = isScroll; // && isVerticalScroll;
    return (
      <div
        className="absolute left-0 top-0 z-50 column-start shrink-0 justify-start"
        style={{
          left:
            screen.container.left +
            s.m + s.m025,
          gap: s.m025,
          height: s.m3,
          width: 0,
          top:
            foundationValue?.top +
            foundationValue?.height +
            s.m05,
        }}
      >
        <HudLeftShuffle
        />
        {isScrollTopShown && (
          <>
            <PicsHudLeftLine  />
            <PicsHeaderScrollTop
            />
          </>
        )}
      </div>
    );
  });
