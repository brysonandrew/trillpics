import type { FC } from "react";
import { animate } from "framer-motion";
import { IconsTrash } from "~/components/icons/video/trash1";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { useContextGrid } from "~/context";
import { usePicVideo } from "~/hooks/pic/video";
import { useNavigationControls } from "~/hooks/navigation/controls";
import { VIDEO_ROUTE } from "~/constants/params";

export const LeftButtonsClear: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  ...props
}) => {
  const { clear, count } = usePicVideo();
  const { main } = useContextGrid();
  const { togglePathValue, isActive } =
    useNavigationControls(VIDEO_ROUTE);

  const handleClear = () => {
    const prev =
      main.blur.value.x.get();
    main.blur.control.x = animate(
      main.blur.value.x,
      100,
      {
        type: "tween",
        onComplete: () =>
          main.blur.value.x.set(prev),
      }
    );

    if (!isActive) {
      togglePathValue(VIDEO_ROUTE);
    }
    clear();
  };
  const title = "Delete all";
  return (
    <Button
      onClick={handleClear}
      Icon={IconsTrash}
      subtitle={`Delete all ${count} of the pics you have added.`}
      {...props}
      title={title}
    >
      {title}
    </Button>
  );
};
