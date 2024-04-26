import type { FC } from "react";
import { ControlsClear } from "~/pages/directors-mode/screen/clear";
import { ControlsPlayer } from "~/pages/directors-mode/screen/player";
import { ControlsShow } from "~/pages/directors-mode/screen/show";
import { TDirectorsModeFooterProps } from "~/pages/directors-mode/footer/types";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useVideoStore } from "~/store";
import { useShallow } from "zustand/react/shallow";

export const DirectorsModeFooterControls: FC<
  TDirectorsModeFooterProps
> = ({
  Button = PillBHover,
  ..._props
}) => {
  const { isVideoPics } = useVideoStore(
    useShallow(({ isVideoPics }) => ({
      isVideoPics,
    }))
  );
  const props = { Button, ..._props };
  const title = isVideoPics()
    ? null
    : "Random Video";
  return (
    <>
      {isVideoPics() && (
        <>
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

      <ControlsPlayer
        layoutId="ControlsPlayer"
        title={title}
        {...props}
      />
    </>
  );
};
