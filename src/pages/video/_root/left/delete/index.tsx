import type { FC } from "react";
import { LeftButtonsClear } from "~/pages/video/_root/left/buttons/clear";
import { LinesHorizontal } from "~/pages/video/_common/footer/nav/lines/horizontal";
import { Button } from "@brysonandrew/dark-mode";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { TypographyBordered } from "~/components/typography/bordered";
import { boxSize } from "~/constants/box/size";
import { usePicVideo } from "~/hooks/pic/video";
import { useReady } from "~/hooks/use-ready";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { SeperatorHorizontal } from "~/pages/video/_root/left/seperator/horizontal";
import { FILTERS_FAT_1_SVG_PROPS } from "~/shell/global/svg/filters/fat/1";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { TypographyBorderedSm } from "~/components/typography/bordered/sm";

export const _RootLeftDelete: FC<
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
    <div>
      <div
        className="column-start absolute bottom-0 left-0 gap-4 w-0 h-0"
        style={{
          height: 200,
          left: bSize.m * 1.5,
          bottom: bSize.m * 1.25,
        }}
      >
        <LeftButtonsClear
          key="LeftButtonsClear"
          {...(isReady
            ? {
                layoutId:
                  "LeftButtonsClear",
              }
            : {})}
          {...props}
        />
        <LinesVertical
          style={{
            marginLeft: bSize.s05,
          }}
        />
        <TypographyBorderedSm
        >
        delete
        </TypographyBorderedSm>
        <LinesVertical
          style={{
            marginLeft: bSize.s05,
          }}
        />
        <VideoPicsCounter>
          {(count) => (
            <>
              {count}
              {/* {`${count} `} */}
            </>
          )}
        </VideoPicsCounter>
      </div>
    </div>
  );
};
