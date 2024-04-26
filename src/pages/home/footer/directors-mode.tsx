import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { IconsVideo } from "~/components/icons/video/video";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useHoverKey } from "~/hooks/use-hover-key";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import { DirectorsModeFooterControls } from "~/pages/directors-mode/footer/controls";
import { PillB } from "~/components/buttons/pill/b";
import { PillBStill } from "~/components/buttons/pill/b/still";
import { NOOP } from "@brysonandrew/utils-function";

export const HomeFooterDirectorsMode: FC =
  () => {
    const { isHover, handlers } =
      useHoverKey();
    const { togglePathValue } =
      useNavigationControls(
        DIRECTORS_MODE_PATH_VALUE
      );
    const handleClick = () => {
      togglePathValue();
    };
    const title = "Director's Mode";
    const isHovering = isHover(title);
    const DirectorsModeFooterControlsHoverKey =
      "DirectorsModeFooterControlsHoverKey";
    const isDirectorsModeFooterControlsHover =
      isHover(
        DirectorsModeFooterControlsHoverKey
      );

    return (
      <motion.div className="relative row-reverse">
        {/* {true && (
          // isHover(title) &&
         
        )} */}
        <PillBHover
          key={title}
          title={title}
          onClick={
            isDirectorsModeFooterControlsHover
              ? NOOP
              : handleClick
          }
          Icon={IconsVideo}
          outerCircle={
            <>
              {isHovering && (
                <DirectorsModeFooterControls
                  Button={PillBStill}
                  {...PRESENCE_OPACITY}
                  {...handlers(
                    DirectorsModeFooterControlsHoverKey
                  )}
                />
              )}
              <VideoPicCounterFloating />
            </>
          }
        >
          {title}
        </PillBHover>
      </motion.div>
    );
  };
