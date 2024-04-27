import type { FC } from "react";
import { ControlsClear } from "~/pages/directors-mode/footer/controls/clear";
import { ControlsPlayer } from "~/pages/directors-mode/footer/player";
import { ControlsShow } from "~/pages/directors-mode/footer/controls/show";
import { TDirectorsModeFooterProps } from "~/pages/directors-mode/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useTrillPicsStore } from "~/store";
import { ControlsUndo } from "~/pages/directors-mode/footer/controls/undo-redo/undo";
import { ControlsRedo } from "~/pages/directors-mode/footer/controls/undo-redo/redo";
import { Seperator } from "~/pages/directors-mode/footer/controls/seperator";

export const DirectorsModeFooterControls: FC<
  TDirectorsModeFooterProps
> = ({
  Button = PillBHover,
  ..._props
}) => {
  const { isVideoPics: _isVideoPics } =
    useTrillPicsStore(
      ({ isVideoPics }) => ({
        isVideoPics,
      })
    );
  const props = { Button, ..._props };
  const isVideoPics = _isVideoPics();
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
    </>
  );
};
