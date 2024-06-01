import { FC } from "react";
import {
  LayoutGroup,
  motion,
} from "framer-motion";
import { LinesVertical } from "~/components/lines/vertical";
import { boxSize } from "~uno/rules/box/size";
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
  const s = boxSize();
  return (
    <LayoutGroup>
      <motion.div
        className="absolute flex flex-col items-end justify-evenly shrink-0 w-0"
        style={{
          right: -s.m05,
          top:
            foundation.top +
            foundation.height,
          gap: s.m025,
          height: container.isMobile
            ? 0
            : container.height -
              foundation.height +
              s.m025,
        }}
      >
        <div
          className="relative flex flex-col items-end justify-evenly shrink-0 w-0"
          style={{
            top: -s.m025,
            gap: s.m025,
            height: s.m3,
          }}
        >
          <DarkMode />
          <LinesVertical
            classValue="hidden md:flex"
            style={{ left: -s.m05 }}
          />
          <HideControls direction="rtl" />
        </div>
        <LinesVertical
          classValue="opacity-0 md:opacity-100"
          style={{
            left: -s.m05,
          }}
        />
      </motion.div>
    </LayoutGroup>
  );
};
