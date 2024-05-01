import { FC } from "react";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { IconsArrowsLeft } from "~/components/icons/arrows/left";
import { useNavigationExit } from "~/hooks/use-navigation/exit";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { title } from "process";

export const PlayerFooterButtonsExit: FC =
  () => {
    const togglePathValue =
      useNavigationExit(
        DIRECTORS_MODE_PATH_VALUE
      );

    const handleClick = () => {
      togglePathValue();
    };
    const title = "Exit Video Player";

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
