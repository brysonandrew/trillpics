import { FC } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { TMeasureContainerResult } from "~/shell/init/container";
import { useContextGrid } from "~/context";
import { PicsHudHeader } from "~/pics/hud/header";
import { PicsHudFooter } from "~/pics/hud/footer";
import { PicsHudLeft } from "~/pics/hud/left";
import { PicsHudRight } from "~/pics/hud/right";
import { PicsHudHeaderRight } from "~/pics/hud/header/right";
import { PicsHeaderScrollTop } from "~/pics/header/scroll-top";
import { boxSize } from "~/constants/box/size";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = {
  dimensions: THudContainer;
  isVerticalScroll: boolean;
};
export const Hud: FC<TProps> = ({
  dimensions,
  isVerticalScroll,
}) => {
  const { foundationValue, isIdle } =
    useContextGrid();
  const s = boxSize();
  return (
    <>
      <div
        className="fixed w-0 z-0"
        style={{
          left: dimensions.left,
          top: dimensions.top,
          height: dimensions.height,
        }}
      >
        {foundationValue && (
          <PicsHudLeft
            key="PicsHudLeft"
            dimensions={dimensions}
            foundation={foundationValue}
            isIdle={isIdle}
          >
            {isVerticalScroll && (
              <PicsHeaderScrollTop
                isLabel={isIdle}
              />
            )}
          </PicsHudLeft>
        )}
      </div>

      <div
        className="fixed w-0 z-10"
        style={{
          left: dimensions.left,
          top: dimensions.top,
          height: dimensions.height,
        }}
      >
        <div
          className={clsx(
            "absolute top-0 left-0 h-0 row"
          )}
          style={{
            width: dimensions.width,
            gap: s.m05,
          }}
        >
          <AnimatePresence>
            {dimensions.isDimensions && (
              <>
                <PicsHudHeader
                  key="PicsHudHeader"
                  dimensions={
                    dimensions
                  }
                >
                  {foundationValue && (
                    <>
                      <PicsHudHeaderRight
                        foundation={
                          foundationValue
                        }
                        dimensions={
                          dimensions
                        }
                        isIdle={isIdle}
                      />
                      <PicsHudRight
                        key="PicsHudRight"
                        isIdle={isIdle}
                        foundation={
                          foundationValue
                        }
                        dimensions={
                          dimensions
                        }
                      />
                      <PicsHudFooter
                        key="PicsHudFooter"
                        dimensions={
                          dimensions
                        }
                      />
                    </>
                  )}
                </PicsHudHeader>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
{
  /* <SpeedlinesBackward /> */
}
{
  /* {scrollDirection ===
          "forward" && (
          <SpeedlinesForward />
        )}
        {scrollDirection ===
          "backward" && (
          <SpeedlinesBackward />
        )} */
}
