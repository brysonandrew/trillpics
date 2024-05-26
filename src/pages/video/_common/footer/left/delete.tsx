import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { LeftButtonsClear } from "~/pics/hud/left/clear";
import { LinesVertical } from "~/components/lines/vertical";
import { useContextGrid } from "~/context";

export const FooterNavDelete: FC =
  () => {
    const { screen } = useContextGrid();

    const container = screen.container;
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
          height: (vs025 / 4).toFixed(
            2
          ),
        }}
      >
        <LeftButtonsClear
          key="LeftButtonsClear"
          {...{
            layoutId:
              "LeftButtonsClear",
          }}
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
