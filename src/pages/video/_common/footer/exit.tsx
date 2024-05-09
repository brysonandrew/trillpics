import { FC } from "react";
import { IconsArrowsLeft } from "~/components/icons/arrows/left";
import { useNavigationExit } from "~/hooks/use-navigation/exit";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { HOME_ROUTE } from "~/constants/params";

export const VideoFooterExit: FC =
  () => {
    const togglePathValue =
      useNavigationExit(
        HOME_ROUTE
      );

    const handleClick = () => {
      togglePathValue();
    };
    const title =
      "Exit Video Mode";

    return (
      <PillBHover
        key={title}
        title={title}
        onClick={handleClick}
        Icon={IconsArrowsLeft}
      >
        {title}
      </PillBHover>
    );
  };
