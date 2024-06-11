import type { FC } from "react";
import {
  PillBHover,
  TPillBHoverProps,
} from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { VIDEO_ROUTE } from "~/constants/params";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";
import { IconsTrash } from "~/components/icons/video/trash";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { usePicVideoWriteInputs } from "~/hooks/pic/video/write/inputs/hook";
import { boxSize } from "~uno/rules/box/size";
import { useReadyContext } from "~/shell/ready/context";
import { ShowPics } from "~/components/show-pics";

export const LEFT_BUTTONS_CLEAR_TITLE =
  "Delete all";

export const LeftButtonsClear: FC<
  TVideoFooterProps &
    Partial<TPillBHoverProps>
> = ({
  Button = PillBHover,
  ...props
}) => {
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
    <Button
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
    </Button>
  );
};
