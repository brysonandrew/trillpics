import { FC } from "react";
import { useNavigationExit } from "~/hooks/use-navigation/exit";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { HOME_ROUTE } from "~/constants/params";
import { IconsHome } from "~/components/icons/home";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";
import { HoverText } from "~/pages/video/_common/footer/nav/hover-text";

export const VideoFooterExit: FC =
  () => {
    const togglePathValue =
      useNavigationExit(HOME_ROUTE);

    const handleClick = () => {
      togglePathValue();
    };
    const title = "Go Home";

    return (
      <PillBHover
        key={title}
        title={title}
        onClick={handleClick}
        Icon={IconsHome}
        {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
      >
        <HoverText>{title}</HoverText>
      </PillBHover>
    );
  };
