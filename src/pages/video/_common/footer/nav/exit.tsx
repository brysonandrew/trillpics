import { FC } from "react";
import { useNavigationExit } from "~/hooks/navigation/exit";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { HOME_ROUTE } from "~/constants/params";
import { IconsHome } from "~/components/icons/home";
import { PRESENCE_OPACITY_ANIMATE_DELAY_02 } from "~/constants/animation";

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
        classValue="bg-red"
        subtitle="Exit video mode and return to home page."
        onClick={handleClick}
        Icon={IconsHome}
        {...PRESENCE_OPACITY_ANIMATE_DELAY_02}
     />
    );
  };
