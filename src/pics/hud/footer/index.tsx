import { FC, useEffect } from "react";
import {
  animate,
  motion,
} from "framer-motion";
import { THudContainer } from "~/pics/hud";
import { boxSize } from "~uno/rules/box/size";
import { useInitContext } from "~/shell/init/context";
import { PicsHudFooterNav } from "~/pics/hud/footer/nav";
import { useLocation } from "react-router";
import { NAV_ITEMS } from "~/pics/hud/footer/constants";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";

type TProps = {
  container: THudContainer;
};
export const PicsHudFooter: FC<
  TProps
> = ({ container }) => {
  const { pathname } = useLocation();
  const { main } = useInitContext();
  useEffect(() => {
    const index = NAV_ITEMS.findIndex(
      ([_, path]) => path === pathname
    );
    animate(
      main.dragger.navX,
      -(container.width / 3) * index,
      { ease: "easeOut" }
    );
  }, [pathname]);

  const s = boxSize();

  return (
    <motion.footer
    className="absolute row"
      style={{
        top: container.height - s.m05,
        left:
          container.width / 2 - s.m05 - s.m025,
        x: main.dragger.navX,
        height: s.m025/2
      }}
    >
      <PlayerBackgroundOpaque/>
      <PicsHudFooterNav
        container={container}
      />
    </motion.footer>
  );
};
