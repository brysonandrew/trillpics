import type { FC } from "react";
import { LeftButtonsClear } from "~/pages/video/_common/footer/left/buttons/clear";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { SeperatorHorizontal } from "~/pages/video/_common/footer/left/seperator/horizontal";
import { useReady } from "~/hooks/use-ready";
import { usePicVideo } from "~/hooks/pic/video";
import { LinesVertical } from "~/pages/video/_common/footer/nav/lines/vertical";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";
import { BOX_SIZE_MD } from "~/constants/box/style/size";

export const VideoFooterLeft: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  Seperator = SeperatorHorizontal,
  ..._props
}) => {
  const { isVideoPics } = usePicVideo();
  const isReady = useReady();

  const props = {
    Button,
    ..._props,
    style: { zIndex: 99 },
  };

  if (!isVideoPics) return null;
  return (
    <div
      className="column-start absolute left-0 gap-4 w-0"
      style={{
        height: "14vh",
        bottom: "12vh",
      }}
    >
      <div className="column-start">
        <VideoPicsCounter>
          {(count) => (
            <div className="whitespace-nowrap">
              {`${count} pic${
                count === 1 ? "" : "s"
              }`}
            </div>
          )}
        </VideoPicsCounter>
      </div>
      <LinesVertical
        style={{
          marginLeft: BOX_SIZE_MD / 2,
        }}
      />
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
