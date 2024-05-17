import type { FC } from "react";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { SeperatorHorizontal } from "~/pages/video/_root/left/seperator/horizontal";
import { useReady } from "~/hooks/use-ready";
import { usePicVideo } from "~/hooks/pic/video";
import { boxSize } from "~/constants/box/size";
import { _RootLeftDelete } from "~/pages/video/_root/left/delete";
import { _RootLeftDuration } from "~/pages/video/_root/left/duration";

export const VideoFooterLeft: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  Seperator = SeperatorHorizontal,
  ..._props
}) => {
  const { isVideoPics, count } =
    usePicVideo();

  if (!isVideoPics) return null;
  return (
    <>
    <_RootLeftDelete {..._props} />
    <_RootLeftDuration {..._props} />
    </>
  );
};
