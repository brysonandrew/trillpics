import type { FC } from "react";
import { LinesHorizontal } from "~/pages/video/_common/footer/left/lines/horizontal";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { boxSize } from "~/constants/box/size";
import { usePicVideo } from "~/hooks/pic/video";
import { useReady } from "~/hooks/use-ready";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { SeperatorHorizontal } from "~/pages/video/_common/footer/left/seperator/horizontal";
import { Slider } from "~/components/slider";
import { TypographyBorderedSm } from "~/components/typography/bordered/sm";

export const _RootLeftDuration: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  Seperator = SeperatorHorizontal,
  ..._props
}) => {
  const { isVideoPics, count } =
    usePicVideo();
  const isReady = useReady();

  const props = {
    Button,
    ..._props,
    style: { zIndex: 99 },
  };
  const bSize = boxSize();
  return (
    <div
      className="row absolute bottom-0 left-0 gap-4 h-1 bg-green"
      style={{
        left: bSize.m * 2.5,
        bottom: 0,
        width: 'calc(100% - 245px)'
      }}
    >
      <LinesHorizontal />
      <TypographyBorderedSm>
        duration
      </TypographyBorderedSm>
      <LinesHorizontal />
      <div className="w-full md:w-3/4">
        <Slider />
      </div>
      <LinesHorizontal />
    </div>
  );
};
