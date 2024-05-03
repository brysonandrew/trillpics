import type { FC } from "react";
import { ControlsClear } from "~/pages/video/_common/footer/controls/clear";
import { ControlsPlayer } from "~/pages/video/_common/footer/player";
import { ControlsShow } from "~/pages/video/_common/footer/controls/show";
import { TVideoFooterProps } from "~/pages/video/_common/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useTrillPicsStore } from "~/store";
import { ControlsUndo } from "~/pages/video/_common/footer/controls/undo-redo/undo";
import { ControlsRedo } from "~/pages/video/_common/footer/controls/undo-redo/redo";
import { SeperatorHorizontal } from "~/pages/video/_common/footer/controls/seperator/horizontal";

export const VideoFooterControls: FC<
  TVideoFooterProps
> = ({
  Button = PillBHover,
  Seperator = SeperatorHorizontal,
  ..._props
}) => {
  const { videoPics } =
    useTrillPicsStore(
      ({ videoPics }) => ({
        videoPics,
      })
    );
  const props = {
    Button,
    ..._props,
    style: { zIndex: 99 },
  };
  const isVideoPics =
    videoPics.length > 0;
  const title = isVideoPics
    ? undefined
    : "Random Video";
  return (
    <>
      <Seperator />
      <ControlsUndo
        layoutId="ControlsUndo"
        {...props}
      />
      <ControlsRedo
        layoutId="ControlsRedo"
        {...props}
      />
      {isVideoPics && (
        <>
          <Seperator />
          <ControlsClear
            layoutId="ControlsClear"
            {...props}
          />
          <ControlsShow
            layoutId="ControlsShow"
            {...props}
          />
        </>
      )}
      <Seperator />
      <ControlsPlayer
        layoutId="ControlsPlayer"
        title={title}
        {...props}
      />
      <Seperator />
    </>
  );
};
