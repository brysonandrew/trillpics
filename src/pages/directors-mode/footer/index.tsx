import { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { DirectorsModeFooterExit } from "~/pages/directors-mode/footer/exit";
import { DirectorsModeFooterControls } from "~/pages/directors-mode/footer/controls";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";

type TProps = TPropsWithChildren;
export const DirectorsModeFooter: FC<
  TProps
> = () => {
  return (
    <>
      <AnimatePresence>
        <DirectorsModeFooterControls
          {...PRESENCE_OPACITY}
        />
      </AnimatePresence>
      <DirectorsModeFooterExit />
    </>
  );
};
