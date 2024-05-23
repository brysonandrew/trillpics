import { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { boxSize } from "~/constants/box/size";
import { LinesVertical } from "~/pages/video/_common/footer/left/lines/vertical";
import { FooterNavDelete } from "~/pages/video/_common/footer/left/delete";
import { FooterNavAdd } from "~/pages/video/_common/footer/left/add";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";

export const _CommonFooterLeft: FC =
  () => {
    const { screen } =
      useTrillPicsStore(
        ({ screen }) => ({
          screen,
        })
      );
    const { count } =
      usePicVideoReadInputs();
    const isVideoPics = count > 0;
    const container =
      screen.isDimensions &&
      screen.container;
    if (!container) return null;

    const bSize = boxSize();
    const verticalSpace =
      container.height / 2;
    const vs05 = verticalSpace / 2;
    const vs025 = verticalSpace / 4;
    const totalWidth =
      container.width - bSize.m * 2;
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
        <div
          className="absolute translate-y-1/2 top-0"
          style={{
            top: -bSize.s05,
            left: bSize.m * 1.5,
          }}
        >
          <VideoPicsCounter>
            {(count) => (
              <div className="whitespace-nowrap">
                {count}
              </div>
            )}
          </VideoPicsCounter>
        </div>
        <FooterNavAdd />
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
