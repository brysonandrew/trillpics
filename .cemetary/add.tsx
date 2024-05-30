import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { LinesVertical } from "~/components/lines/vertical";
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { useContextGrid } from "~/shell/ready/context";

export const FooterNavAdd: FC = () => {
  const { screen } = useContextGrid();

  const container =
    screen.container;
  if (!container) return null;
  const bSize = boxSize();
  const verticalSpace =
    container.height / 2;
  const vs025 = verticalSpace / 4;

  return (
    <div
      className="absolute column-start"
      style={{
        height: vs025 / 4,
        top: bSize.m,
        left: bSize.m * 1.5,
        gap: bSize.m05,
      }}
    >
      <LinesVertical
        style={{
          marginLeft: bSize.s05,
        }}
      />
      <span className="_outline-filter">
        use random
      </span>
      {/* <LinesVertical
        style={{
          marginLeft: bSize.s05,
        }}
      /> */}
      <HudLeftAddRandom
        // key="HudLeftAddRandom"
        // {...{
        //   layoutId: "HudLeftAddRandom",
        // }}
      />
    </div>
  );
};
