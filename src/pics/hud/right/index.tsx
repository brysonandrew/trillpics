import { FC } from "react";
import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { LinesVertical } from "~/components/lines/vertical";
import { box } from "~uno/rules/box";
import { HideControls } from "~/pics/header/right/zen-mode";
import { DarkMode } from "~/pics/header/right/dark-mode";
import { THudContainer } from "~/pics/hud";

type TProps = {
  foundation: DOMRect;
  container: THudContainer;
};
export const PicsHudRight: FC<
  TProps
> = ({ foundation, container }) => {
  
  return (
    <LayoutGroup>
      <motion.div
        className="absolute flex flex-col items-end justify-evenly shrink-0 w-0"
        style={{
          right: -box.m05,
          top:
            foundation.top +
            foundation.height,
          height: container.isMobile
            ? 0
            : container.height -
              foundation.height +
              box.m025,
        }}
      >
        <div
          className="relative flex flex-col items-end justify-evenly shrink-0 w-0"
          style={{
            top: -box.m025,
            gap: box.m025,
            height: box.m3,
          }}
        >
          <DarkMode />
          <LinesVertical
            classValue="hidden md:flex"
            style={{ left: -box.m05 }}
          />
          <HideControls direction="rtl" />
        </div>
        <LinesVertical
          classValue="opacity-0 md:opacity-50"
          style={{
            left: -box.m05,
          }}
        />
      </motion.div>
    </LayoutGroup>
  );
};
