import { FC } from "react";
import { IconsArrowsLeft } from "~/components/icons/arrows/left";
import { useNavigationExit } from "~/hooks/use-navigation/exit";
import { HOME_PATH_VALUE } from "~/constants/params";
import { PillBHover } from "~/components/buttons/pill/b/hover";

export const DirectorsModeFooterExit: FC =
  () => {
    const togglePathValue =
      useNavigationExit(
        HOME_PATH_VALUE
      );

    const handleClick = () => {
      togglePathValue();
    };
    const title =
      "Exit Director's Mode";

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
