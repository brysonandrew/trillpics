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
          right: -box._05,
          top:
            foundation.top +
            foundation.height,
          height: container.isMobile
            ? 0
            : container.height -
              foundation.height +
              box._025,
        }}
      >
        <div
          className="relative flex flex-col items-end justify-evenly shrink-0 w-0"
          style={{
            top: -box._025,
            gap: box._025,
            height: box._3,
          }}
        >
          <DarkMode />
          <LinesVertical
            classValue="hidden md:flex"
            style={{ left: -box._05 }}
          />
          <HideControls direction="rtl" />
        </div>
        <LinesVertical
          classValue="opacity-0 md:opacity-50"
          style={{
            left: -box._05,
          }}
        />
      </motion.div>
    </LayoutGroup>
  );
};
