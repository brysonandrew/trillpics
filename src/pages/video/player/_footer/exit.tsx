import { FC } from "react";
import { IconsArrowsLeft } from "~/components/icons/arrows/left";
import { useNavigationExit } from "~/hooks/navigation/exit";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { VIDEO_ROUTE } from "~/constants/params";

export const PlayerFooterButtonsExit: FC =
  () => {
    const togglePathValue =
      useNavigationExit(VIDEO_ROUTE);

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
