import { FC } from "react";
import { motion } from "framer-motion";
import { useHoverKey } from "~/hooks/use-hover-key";
import { VIDEO_ROUTE } from "~/constants/params";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { ControlsShow } from "~/pages/video/_common/footer/nav/show";
import { ControlsPlayer } from "~/pages/video/_common/footer/nav/player";
import { FooterNavVideo } from "~/pages/video/_common/footer/nav/video";
import { VideoFooterExit } from "~/pages/video/_common/footer/nav/exit";
import { boxSize } from "~/constants/box/style/size";
import { useReady } from "~/hooks/use-ready";
import { LinesHorizontal } from "~/pages/video/_common/footer/nav/lines/horizontal";
import { boxRadius } from "~/constants/box/style/radius";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import clsx from "clsx";

const HOVER_KEY = "VideoFooterNav";

export const VideoFooterNav: FC =
  () => {
    const { togglePathValue } =
      useNavigationControls();
    const handleClick = () => {
      togglePathValue(VIDEO_ROUTE);
    };
    const { isHover, motionHandlers } =
      useHoverKey();
    const isReady = useReady();
    const { minHeight, minWidth } =
      boxSize({ size: "md" });

    const title = "Video mode";
    const isHovering = isHover(title);
    const VideoFooterControlsHoverKey =
      "VideoFooterControlsHoverKey";
    const isVideoFooterControlsHover =
      isHover(
        VideoFooterControlsHoverKey
      );

    return (
      <div className="absolute bottom-6 row justify-between gap-4 h-0 w-full text-main">
        <VideoFooterExit />
        <div className="hidden md:row justify-between gap-4">
          <LinesHorizontal classValue="opacity-50" />
          create
        </div>
        <LinesHorizontal classValue="opacity-50" />
        <motion.div
          className={clsx(
            "relative row justify-between gap-4 p-4 w-3/4 shrink-0 border-current border-2",
            "backdrop-blur-lg"
          )}
          style={{
            borderRadius:
              boxRadius("XL"),
          }}
          {...motionHandlers(HOVER_KEY)}
          {...PRESENCE_OPACITY}
        >
          <FooterNavVideo />
          <div className="hidden md:row justify-between gap-4">
            <LinesHorizontal />
            edit
          </div>

          <LinesHorizontal />
          <ControlsShow
            key="ControlsShow"
            {...(true
              ? {
                  layoutId:
                    "ControlsShow",
                }
              : {})}
          />
          <div className="hidden md:row justify-between gap-4">
            <LinesHorizontal />
            play
          </div>
          <LinesHorizontal />
          <ControlsPlayer
            key="ControlsPlayer"
            {...(isReady
              ? {
                  layoutId:
                    "ControlsPlayer",
                }
              : {})}
            title={"title"}
          />
        </motion.div>
      </div>
    );
  };
