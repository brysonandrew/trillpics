import { FC } from "react";
import { PicsHudHeaderFoundation } from "~/pics/hud/header/foundation";
import { useContextGrid } from "~/context";
import { PicsHudHeaderRight } from "~/pics/hud/header/right";
import { PicsHudRight } from "~/pics/hud/right";
import { THudContainer } from "~/pics/hud";

type TProps = {
  container: THudContainer;
  isVerticalScroll: boolean;
};
export const PicsHudHeader: FC<
  TProps
> = ({ isVerticalScroll, container }) => {
  const { foundationValue, isIdle } =
    useContextGrid();
  return (
    <header style={{ height: 0 }}>
      <PicsHudHeaderFoundation
        container={container}
      />
      {foundationValue && (
        <>
          <PicsHudHeaderRight
            key="PicsHudHeaderRight"
            foundation={foundationValue}
            container={container}
            isIdle={isIdle}
          />
          <PicsHudRight
            key="PicsHudRight"
            isIdle={isIdle}
            playerHeight={
              container.playerHeight
            }
            foundation={foundationValue}
            container={container}
            isVerticalScroll={
              isVerticalScroll
            }
          />
        </>
      )}
    </header>
  );
};
