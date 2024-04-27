import type { FC } from "react";
import { useTrillPicsStore } from "~/store";
import { IconsTrash } from "~/components/icons/video/trash1";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TDirectorsModeFooterProps } from "~/pages/directors-mode/footer/types";

export const ControlsClear: FC<
  TDirectorsModeFooterProps
> = ({
  Button = PillBHover,
  ...props
}) => {
  const { removeVideoPic } =
    useTrillPicsStore(
      ({ removeVideoPic }) => ({
        removeVideoPic,
      })
    );
  const handleClear = () => {
    removeVideoPic();
  };
  const title = "Clear pics from video";
  return (
    <Button
      onClick={handleClear}
      Icon={IconsTrash}
      {...props}
      title={title}
    >
      {title}
    </Button>
  );
};
