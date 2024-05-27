import { type FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { IconsPause } from "~/components/icons/playback/pause";
import { IconsPlay } from "~/components/icons/playback/play";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { isNull } from "~/utils/validation/is/null";

export const PlaybackButtonsPlay: FC<
  Partial<TPillBProps>
> = (props) => {
  const { playerInstance, isPlaying:_isPlaying } =
    useTrillPicsStore(
      ({
        playerInstance,
        isPlaying,
      }) => ({
        playerInstance,
        isPlaying,
      })
    );

  const handlePlay = () => {
    if (isNull(playerInstance)) {
      console.log("NO player instance");
      return;
    }
    playerInstance.unmute();
    playerInstance.toggle();
  };

  return (
    <PillB
      {...resolveAccessibilityTitles(
        _isPlaying ? "pause" : "play"
      )}
      onClick={handlePlay}
      Icon={
        _isPlaying
          ? IconsPause
          : IconsPlay
      }
      {...props}
    />
  );
};
