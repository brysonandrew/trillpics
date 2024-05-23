import type { FC } from "react";
import { TypographyBorderedSm } from "~/components/typography/bordered/sm";
import { boxSize } from "~/constants/box/size";
import { LinesHorizontal } from "~/pages/video/_common/footer/left/lines/horizontal";
import { ControlsSequence } from "~/pages/video/_common/footer/left/show";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";

export const _RootLeftSequence: FC<
  TVideoFooterProps
> = () => {
  const bSize = boxSize();

  return (
    <div className="left-0 absolute w-full h-1 bg-red"
    style={{
      left: bSize.m * 2.5,
      bottom: bSize.m * 1.5,
      width: 'calc(100% - 245px)'
    }}
    >
      <LinesHorizontal />
      <TypographyBorderedSm>
        sequence
      </TypographyBorderedSm>
      <LinesHorizontal />
      <ControlsSequence
        key="ControlsSequence"
        {...(true
          ? {
              layoutId:
                "ControlsSequence",
            }
          : {})}
      />
      <LinesHorizontal />
    </div>
  );
};
