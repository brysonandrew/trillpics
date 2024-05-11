import type { FC } from "react";
import { ControlsClear } from "~/pages/video/_common/footer/controls/clear";
import { ControlsPlayer } from "~/pages/video/_common/footer/player";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { ControlsUndo } from "~/pages/video/_common/footer/controls/undo-redo/undo";
import { ControlsRedo } from "~/pages/video/_common/footer/controls/undo-redo/redo";
import { SeperatorHorizontal } from "~/pages/video/_common/footer/controls/seperator/horizontal";
import { useReady } from "~/hooks/use-ready";
import { usePicVideo } from "~/hooks/pic/video";
import { ControlsShow } from "~/pages/video/_common/footer/controls/show";

export const VideoFooterControls: FC<
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

  const title = isVideoPics
    ? undefined
    : "Random Video";

  return (
    <>
      <Seperator key="Seperator0" />
      <ControlsUndo
        key="ControlsUndo"
        {...(isReady
          ? {
              layoutId: "ControlsUndo",
            }
          : {})}
        {...props}
      />
      <ControlsRedo
        key="ControlsRedo"
        {...(isReady
          ? {
              layoutId: "ControlsRedo",
            }
          : {})}
        {...props}
      />
      {isVideoPics && (
        <>
          <Seperator />
          <ControlsClear
            key="ControlsClear"
            {...(isReady
              ? {
                  layoutId:
                    "ControlsClear",
                }
              : {})}
            {...props}
          />
          <ControlsShow
            key="ControlsShow"
            {...(isReady
              ? {
                  layoutId:
                    "ControlsShow",
                }
              : {})}
            {...props}
          />
        </>
      )}
      <Seperator />
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
      />
      <Seperator />
    </>
  );
};
