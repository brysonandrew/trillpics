import type { FC } from "react";
import { box } from "~uno/rules/box";
import { useContextReady } from "~/shell/ready/context";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { HudLeftShuffle } from "~/pics/hud/left/grid-options/shuffle";
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
    
    const isScrollTopShown = isScroll; // && isVerticalScroll;
    return (
      <div
        className="absolute left-0 top-0 z-0 column-start shrink-0 justify-start"
        style={{
          left:
            screen.container.left +
            box._ + box._025,
          gap: box._025,
          height: box._3,
          width: 0,
          top:
            foundationValue?.top +
            foundationValue?.height +
            box._05+box._025,
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
