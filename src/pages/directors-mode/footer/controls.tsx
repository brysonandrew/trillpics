
import type { FC } from "react";
import { ControlsClear } from "~/pages/directors-mode/screen/clear";
import { ControlsPlayer } from "~/pages/directors-mode/screen/player";
import { ControlsShow } from "~/pages/directors-mode/screen/show";

export const DirectorsModeFooterControls: FC = () => {
  return (
    <>
      <ControlsClear />
      <ControlsShow />
      <ControlsPlayer />
    </>
  );
};