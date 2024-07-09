import { FC } from "react";
import clsx from "clsx";
import { TMeasureContainerResult } from "~/shell/init/hooks/measure/container";
import { useContextReady } from "~/shell/ready/context";
import { PicsHudHeader } from "~/pics/hud/header";
import { PicsHudLeft } from "~/pics/hud/left";
import { box } from "~uno/rules/box";
import { withControlsCheck } from "~/store/hocs/with-controls-check";
import { HudFooter } from "~/pics/hud/footer";

export type THudContainer = Extract<
  TMeasureContainerResult,
  { isDimensions: true }
>;
export const Hud: FC =
  withControlsCheck(() => {
    const { foundationValue, screen } =
      useContextReady();
    
    const container = screen.container;
    return (
      <>
        <div
          className="fixed w-0 z-10"
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
              gap: box._05,
            }}
          >
            <PicsHudHeader
              key="PicsHudHeader"
              container={container}
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
                  foundation={
                    foundationValue
                  }
                />
              )}
            </div>
          </div>
        </div>
        <HudFooter />

      </>
    );
  });
