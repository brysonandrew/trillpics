import { FC } from "react";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { IconsVideo } from "~/components/icons/video/video";
import { useHoverKey } from "~/hooks/use-hover-key";
import { NOOP } from "@brysonandrew/utils-function";
import { VIDEO_ROUTE } from "~/constants/params";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TPillBProps } from "~/components/buttons/pill/b";

export const FooterNavVideo: FC<Partial<TPillBProps>> =
  (props) => {
    const { isHover } = useHoverKey();
    const { togglePathValue,isActive } =
      useNavigationControls(VIDEO_ROUTE);
    const handleClick = () => {
      togglePathValue(VIDEO_ROUTE);
    };
    const title = "Add";

    const subtitle = "Click on the pics you want in your video.";
    const VideoFooterControlsHoverKey =
      "VideoFooterControlsHoverKey";
    const isVideoFooterControlsHover =
      isHover(
        VideoFooterControlsHoverKey
      );
    return (
      <PillBHover
        key={title}
        title={title}
        subtitle={subtitle}
        layoutId="VideoButton"
        onClick={
          isVideoFooterControlsHover
            ? NOOP
            : handleClick
        }
        Icon={IconsVideo}
        isSelected={isActive}
        {...props}
      >
        {title}
      </PillBHover>
    );
  };
