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
import { useReady } from "~/hooks/use-ready";

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
  const isReady = useReady();

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
        {...(isReady
          ? {
              layoutId: "ControlsUndo",
            }
          : {})}
        {...props}
      />
      <ControlsRedo
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
            {...(isReady
              ? {
                  layoutId:
                    "ControlsClear",
                }
              : {})}
            {...props}
          />
          <ControlsShow
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
