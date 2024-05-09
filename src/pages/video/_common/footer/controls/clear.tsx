import type { FC } from "react";
import { useTrillPicsStore } from "~/store";
import { IconsTrash } from "~/components/icons/video/trash1";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { useVirtualizeContext } from "~/context";

export const ControlsClear: FC<
  TVideoFooterProps
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
  const { main } =
    useVirtualizeContext();

  const handleClear = () => {
    // const prev = blurX.get();
    // blurXRef.current = animate(
    //   blurX,
    //   100,
    //   {
    //     type: "tween",
    //     onComplete: () =>
    //       blurX.set(prev),
    //   }
    // );

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
