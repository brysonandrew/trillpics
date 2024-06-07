import { FC, useEffect } from "react";
import {
  animate,
  motion,
} from "framer-motion";
import { THudContainer } from "~/pics/hud";
import { boxSize } from "~uno/rules/box/size";
import { useInitContext } from "~/shell/init/context";
import { PicsHudFooterNav } from "~/pics/hud/nav";
import { useLocation } from "react-router";
import { NAV_ITEMS } from "~/pics/hud/nav/constants";

type TProps = {
  container: THudContainer;
};
export const PicsHudFooter: FC<
  TProps
> = ({ container }) => {


  return (
    <motion.footer
      className="absolute row h-0 z-0"
      style={{
      

      }}
    >
     
    </motion.footer>
  );
};
