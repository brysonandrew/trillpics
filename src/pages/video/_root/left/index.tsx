import type { FC } from "react";
import { LeftButtonsClear } from "~/pages/video/_root/left/buttons/clear";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { SeperatorHorizontal } from "~/pages/video/_root/left/seperator/horizontal";
import { useReady } from "~/hooks/use-ready";
import { usePicVideo } from "~/hooks/pic/video";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { boxSize } from "~/constants/box/size";
import { TypographyBordered } from "~/components/typography/bordered";
import { FILTERS_FAT_1_SVG_PROPS } from "~/shell/global/svg/filters/fat/1";
import { LinesHorizontal } from "~/pages/video/_common/footer/nav/lines/horizontal";

export const VideoFooterLeft: FC<
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

  if (!isVideoPics) return null;
  return (
    <div
      className="column-start absolute bottom-0 left-0 gap-4 w-0 h-0"
      style={{
        height: 200,
        left: bSize.m,
        bottom: bSize.m,
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
    
    <LinesVertical style={{marginLeft: bSize.s05}} />
      <TypographyBordered
        classValue="text-sm"
        shadow={{
          classValue:
            "text-sm text-gray",
        }}
        style={FILTERS_FAT_1_SVG_PROPS}
      >
        <div className="whitespace-nowrap font-mono">
          {`delete`}
           {/* pic${count === 1 ? "" : "s"}`} */}
        </div>
      </TypographyBordered>
      <LinesVertical style={{marginLeft: bSize.s05}} />
      <VideoPicsCounter>
        {(count) => (
          <>
            {count}
            {/* {`${count} `} */}
          </>
        )}
      </VideoPicsCounter>
    </div>
  );
};

{
  /* <Seperator key="Seperator0" /> */
}
{
  /* <LeftButtonsUndo
        key="LeftButtonsUndo"
        {...(isReady
          ? {
              layoutId: "LeftButtonsUndo",
            }
          : {})}
        {...props}
      />
      <LeftButtonsRedo
        key="LeftButtonsRedo"
        {...(isReady
          ? {
              layoutId: "LeftButtonsRedo",
            }
          : {})}
        {...props}
      /> */
}

{
  /* <ControlsShow
            key="ControlsShow"
            {...(isReady
              ? {
                  layoutId:
                    "ControlsShow",
                }
              : {})}
            {...props}
          /> */
}
{
  /* <Seperator />
      <ControlsPlayer
        key="ControlsPlayer"
        {...(isReady
          ? {
              layoutId:
                "ControlsPlayer",
            }
          : {})}
        title={title}
        {...props}
      /> */
}
