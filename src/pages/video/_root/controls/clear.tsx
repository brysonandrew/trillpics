import type { FC } from "react";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { VIDEO_ROUTE } from "~/constants/params";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";
import { IconsTrash } from "~/components/icons/video/trash";
import { usePicVideoWriteInputs } from "~/hooks/pic/video/write/inputs/hook";
import { ShowPics } from "~/components/show-pics";

export const LEFT_BUTTONS_CLEAR_TITLE =
  "Delete all";

export const ControlsClear: FC<
  Partial<TPillBHoverProps>
> = ({ ...props }) => {
  const {
    clear,
    count,
    pics: names,
    isPics: isVideoPics,
  } = usePicVideoWriteInputs();
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_ROUTE);
  const handler = useBlurAnimate(
    "addRandom"
  );

  if (!isVideoPics) return <div />;

  const handleClear = () => {
    handler();
    if (!isActive) {
      togglePathValue(VIDEO_ROUTE);
    }
    clear();
  };

  const title =
    LEFT_BUTTONS_CLEAR_TITLE;

  return (
    <PillBHover
      onClick={handleClear}
      Icon={IconsTrash}
      direction="rtl"
      subtitle={
        <ShowPics
          title={`Delete all ${count} of the pics you have added.`}
          names={names}
        />
      }
      {...props}
      title={title}
    >
      {title}
    </PillBHover>
  );
};
