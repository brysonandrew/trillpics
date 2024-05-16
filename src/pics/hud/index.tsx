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
import { PicsHudCenter } from "~/pics/hud/center";
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
  const { main } = useContextGrid();
  return (
    <div
      className="absolute w-0"
      style={{
        left: dimensions.left,
        top: dimensions.top,
        height: dimensions.height,
      }}
    >
      <div
        className={clsx(
          "absolute top-0 left-0 h-0 row gap-6 bg-red"
        )}
        style={{
          width: dimensions.width,
        }}
      >
        <AnimatePresence>
          {dimensions.isDimensions && (
            <>
              <PicsHudHeader
                key="PicsHudHeader"
                dimensions={dimensions}
              >
                {main.origin.value && (
                  <>
                    <PicsHudHeaderRight
                      origin={
                        main.origin
                          .value
                      }
                      dimensions={
                        dimensions
                      }
                    />
                    <PicsHudLeft
                      key="PicsHudLeft"
                      dimensions={
                        dimensions
                      }
                      origin={
                        main.origin
                          .value
                      }
                    />
                    <PicsHudFooter
                      key="PicsHudFooter"
                      origin={
                        main.origin
                          .value
                      }
                      dimensions={
                        dimensions
                      }
                    />
                    <PicsHudRight
                      key="PicsHudRight"
                      origin={
                        main.origin
                          .value
                      }
                      dimensions={
                        dimensions
                      }
                    >
                      {isVerticalScroll && (
                        <PicsHeaderScrollTop />
                      )}
                    </PicsHudRight>
                  </>
                )}
              </PicsHudHeader>
              <PicsHudCenter
                key="PicsHudCenter"
                {...dimensions}
              />
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
