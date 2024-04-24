import { FC, useRef } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/motion-cursor";
import { PillB } from "~/components/buttons/pill/b";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { DirectorsModeFooterControls } from "~/pages/directors-mode/footer/controls";
import { resolvePresence } from "@brysonandrew/motion-core";

export const HomeFooterDirectorsMode: FC =
  () => {
    const prevHoverRef = useRef<
      null | string
    >(null);
    const { togglePathValue } =
      useNavigationControls(
        DIRECTORS_MODE_PATH_VALUE
      );
    const s = useBorderStyleMd();
    const handleClick = () => {
      togglePathValue();
    };
    const title = "Director's Mode";

    const {
      isHover,
      handlers: {
        onMouseLeave,
        ...handlers
      },
    } = useHoverKey(
      NONE_CURSOR_KEY,
      title
    );

    const handleMouseLeave = () => {
      prevHoverRef.current = title;
      onMouseLeave();
    };

    return (
      <>
        <AnimatePresence>
          {isHover && (
            <motion.div
            className="column gap-4"
              key="DirectorsModeFooterControls"
              {...resolvePresence(
                {
                  opacity: 0,
                },
                { opacity: 0.7 }
              )}
            >
              <DirectorsModeFooterControls />
            </motion.div>
          )}
        </AnimatePresence>

        <PillB
          key={title}
          title={title}
          onClick={handleClick}
          onMouseLeave={
            handleMouseLeave
          }
          Icon={IconsVideo}
          outerCircle={
            !isHover && (
              <VideoPicCounterFloating />
            )
          }
          {...handlers}
        >
          {isHover &&
          (title ===
            prevHoverRef.current ||
            prevHoverRef.current ===
              null)
            ? title
            : ""}
        </PillB>
      </>
    );
  };
