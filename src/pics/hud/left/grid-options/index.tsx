import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { useContextReady } from "~/shell/ready/context";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { HudLeftShuffle } from "~/pics/hud/left/shuffle";
import { useTrillPicsStore } from "~/store/middleware";
import { withControlsCheck } from "~/store/hocs/with-controls-check";

export const GridOptions: FC =
  withControlsCheck(() => {
    const {
      foundationValue,
      isIdle,
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
  });
