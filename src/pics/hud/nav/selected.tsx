import type { FC } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { PillBText } from "~/components/buttons/pill/b/text";
import { NavCountersSelectedMusic } from "~/pics/hud/nav/counters/selected/music";
import { NavCountersSelectedPics } from "~/pics/hud/nav/counters/selected/pics";
import { THudContainer } from "~/pics/hud";
import { box } from "~uno/rules/box";
import { PAGE_TITLES } from "~/pics/hud/nav/constants";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

type TProps = {
  title: string;
  Icon: FC<TIconsSvgProps>;
  container: THudContainer;
};
export const PicsHudFooterNavSelected: FC<
  TProps
> = ({ container, title, Icon }) => {
  
  return (
    <motion.li
      className={clsx(
        "row relative center z-10 pointer-events-none"
      )}
      style={{
        height: box.m,
        gap: box.m05,
        bottom:box.m05,
      }}
      initial={{
        scale: 1,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 1,
        opacity: 0,
      }}
    >
    

      
      <Icon classValue='_outline-filter'  />
      {!container.isTablet && (
        <PillBText layoutId={title}>
          {title}
        </PillBText>
      )}
      {title ===
        PAGE_TITLES["Music"] && (
        <NavCountersSelectedMusic />
      )}
      {title ===
        PAGE_TITLES["Sequence"] && (
        <NavCountersSelectedPics />
      )}
    </motion.li>
  );
};
