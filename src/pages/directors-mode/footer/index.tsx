import { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { DirectorsModeFooterExit } from "~/pages/directors-mode/footer/exit";
import { DirectorsModeFooterControls } from "~/pages/directors-mode/footer/controls";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";

type TProps = TPropsWithChildren;
export const DirectorsModeFooter: FC<
  TProps
> = () => {
  return (
    <>
      <DirectorsModeFooterControls
        {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
      />
      <DirectorsModeFooterExit />
    </>
  );
};
