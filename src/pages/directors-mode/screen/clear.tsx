import type { FC } from "react";
import { useVideoStore } from "~/store";
import { IconsTrash } from "~/components/icons/video/trash1";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TDirectorsModeFooterProps } from "~/pages/directors-mode/footer/types";

export const ControlsClear: FC<
TDirectorsModeFooterProps
> = ({Button = PillBHover, ...props}) => {
  const { removeVideo } =
    useVideoStore();
  const handleClear = () => {
    removeVideo();
  };
  const title = "Clear pics from video";

  return (
    <Button
      title={title}
      onClick={handleClear}
      Icon={IconsTrash}
      {...props}
    >
      {title}
    </Button>
  );
};
