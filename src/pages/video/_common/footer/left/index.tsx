import { FC } from "react";
import { boxSize } from "~/constants/box/size";
import { LinesVertical } from "~/components/lines/vertical";
import { FooterNavDelete } from "~/pages/video/_common/footer/left/delete";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { useContextReady } from "~/shell/ready/context";

export const _CommonFooterLeft: FC =
  () => {
    const { screen } = useContextReady();
    const { count } =
      usePicVideoReadInputs();
    const isVideoPics = count > 0;
    const container =
      screen.container;
    if (!container) return null;

    const bSize = boxSize();
    const verticalSpace =
      container.height / 2;
    const vs025 = verticalSpace / 4;
    return (
      <div
        className="relative column left-0 bottom-0"
        style={{
          height: verticalSpace,
          width: 0,
          top: -verticalSpace,
          gap: vs025,
        }}
      >
        {isVideoPics && (
          <FooterNavDelete />
        )}

        {/* <FooterNavAdd /> */}
        <div
          className="absolute w-0"
          style={{
            height:
              verticalSpace -
              bSize.m * 2,
            top: bSize.m, //verticalSpace,
            left: 0,
          }}
        >
          <LinesVertical
            style={{
              marginLeft: bSize.s05,
            }}
          />
        </div>
      </div>
    );
  };
