import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { useReady } from "~/hooks/use-ready";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { useTrillPicsStore } from "~/store/middleware";

export const FooterNavDelete: FC =
  () => {
    const { screen } =
      useTrillPicsStore(
        ({ screen }) => ({
          screen,
        })
      );
    const isReady = useReady();

    const container =
      screen.isDimensions &&
      screen.container;
    if (!container) return null;
    const bSize = boxSize();
    const verticalSpace =
      container.height / 2;
    const vs05 = verticalSpace / 2;
    const vs025 = verticalSpace / 4;
    return (
      <div
        className="relative w-0 column-start"
        style={{
          top: -vs025 - bSize.m,
          left: bSize.m * 1.5,
          gap: bSize.m05,
          height: (vs025 / 4).toFixed(2),
        }}
      >
        <LeftButtonsClear
          key="LeftButtonsClear"
          {...(isReady
            ? {
                layoutId:
                  "LeftButtonsClear",
              }
            : {})}
        />
        <LinesVertical
          style={{
            marginLeft: bSize.s05,
          }}
        />
        <span className="_outline-filter">
          delete
        </span>
        <LinesVertical
          style={{
            marginLeft: bSize.s05,
          }}
        />
      </div>
    );
  };
