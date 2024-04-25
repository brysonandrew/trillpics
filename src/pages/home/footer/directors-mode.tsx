import { FC } from "react";
import { useNavigationControls } from "~/hooks/use-navigation/controls";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { IconsVideo } from "~/components/icons/video/video";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";
import { VideoPicCounterFloating } from "~/shell/screen/video-pic-counter/floating";
import { PillBHover } from "~/components/buttons/pill/b/hover";

export const HomeFooterDirectorsMode: FC =
  () => {
    const { togglePathValue } =
      useNavigationControls(
        DIRECTORS_MODE_PATH_VALUE
      );
    const s = useBorderStyleMd();
    const handleClick = () => {
      togglePathValue();
    };
    const title = "Director's Mode";

    return (
      <>
        {/* <AnimatePresence>
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
        </AnimatePresence> */}

        <PillBHover
          key={title}
          title={title}
          onClick={handleClick}
          Icon={IconsVideo}
          outerCircle={
            <VideoPicCounterFloating />
          }
        >
          {title}
        </PillBHover>
      </>
    );
  };
