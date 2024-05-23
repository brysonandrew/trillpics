import type { FC } from "react";
import { TypographyBorderedXs } from "~/components/typography/bordered/xs";
import { boxSize } from "~/constants/box/size";
import { useReady } from "~/hooks/use-ready";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { HudLeftAddRandom } from "~/pics/hud/left/add-random";
import { useTrillPicsStore } from "~/store/middleware";

export const FooterNavAdd: FC = () => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({
      screen,
    })
  );
  const container =
    screen.isDimensions &&
    screen.container;
  if (!container) return null;
  const isReady = useReady();
  const bSize = boxSize();
  const verticalSpace =
    container.height / 2;
  const vs05 = verticalSpace / 2;
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
      <TypographyBorderedXs>
        use random
      </TypographyBorderedXs>
      {/* <LinesVertical
        style={{
          marginLeft: bSize.s05,
        }}
      /> */}
      <HudLeftAddRandom
        key="HudLeftAddRandom"
        {...(isReady
          ? {
              layoutId: "HudLeftAddRandom",
            }
          : {})}
      />
    </div>
  );
};
