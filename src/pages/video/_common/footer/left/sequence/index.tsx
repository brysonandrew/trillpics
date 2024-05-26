import type { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { ControlsSequence } from "~/pages/video/_common/footer/left/show";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";

export const _RootLeftSequence: FC<
  TVideoFooterProps
> = () => {
  const bSize = boxSize();

  return (
    <div
      className="left-0 absolute w-full h-1"
      style={{
        left: bSize.m * 2.5,
        bottom: bSize.m * 1.5,
        width: "calc(100% - 245px)",
      }}
    >
      <LinesHorizontal />
      <div>sequence</div>
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
