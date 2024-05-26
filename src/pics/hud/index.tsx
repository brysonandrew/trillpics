import { FC } from "react";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { TMeasureContainerResult } from "~/shell/init/container";
import { useContextGrid } from "~/context";
import { PicsHudHeader } from "~/pics/hud/header";
import { PicsHudLeft } from "~/pics/hud/left";
import { boxSize } from "~/constants/box/size";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
type TProps = {
  container: THudContainer;
  isVerticalScroll: boolean;
};
export const Hud: FC<TProps> = ({
  container,
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
          left: container.left,
          top: container.top,
          height: container.height,
        }}
      >
        <div
          className={clsx(
            "absolute top-0 left-0 h-0 row shrink-0"
          )}
          style={{
            width: container.width,
            gap: s.m05,
          }}
        >
          <AnimatePresence>
            <PicsHudHeader
              key="PicsHudHeader"
              container={container}
              isVerticalScroll={
                isVerticalScroll
              }
            />
            <div
              key="left"
              className="fixed w-0 z-0"
              style={{
                left: container.left,
                top: container.top,
                height:
                  container.height,
              }}
            >
              {foundationValue && (
                <PicsHudLeft
                  key="PicsHudLeft"
                  container={container}
                  playerHeight={
                    container.playerHeight
                  }
                  foundation={
                    foundationValue
                  }
                  isVerticalScroll={
                    isVerticalScroll
                  }
                />
              )}
            </div>
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
