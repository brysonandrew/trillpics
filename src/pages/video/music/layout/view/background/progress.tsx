import type { FC } from "react";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { box } from "~uno/rules/box";

export const LayoutViewBackgroundProgress: FC = () => {
  const { progress } =
    useContextMusicInit();
  return (
    <TimerCurrentProgress
      progress={progress["track"]}
      borderRadius={box.radius.xl}
    />
  );
};
