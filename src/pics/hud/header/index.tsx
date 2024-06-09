import { FC } from "react";
import { PicsHudHeaderFoundation } from "~/pics/hud/header/foundation";
import { useReadyContext } from "~/shell/ready/context";
import { PicsHudHeaderRight } from "~/pics/hud/header/right";
import { PicsHudRight } from "~/pics/hud/right";
import { THudContainer } from "~/pics/hud";

type TProps = {
  container: THudContainer;
};
export const PicsHudHeader: FC<
  TProps
> = ({ container }) => {
  const { foundationValue } =
    useReadyContext();
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
          />
          <PicsHudRight
            key="PicsHudRight"
            foundation={foundationValue}
            container={container}
          />
        </>
      )}
    </header>
  );
};
