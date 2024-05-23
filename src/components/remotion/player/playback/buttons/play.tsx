import { type FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { IconsPause } from "~/components/icons/playback/pause";
import { IconsPlay } from "~/components/icons/playback/play";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import { PillB, TPillBProps } from "~/components/buttons/pill/b";

export const PlaybackButtonsPlay: FC<Partial<TPillBProps>> =
  (props) => {
    const {
      playerInstance,
      isPlaying,
    } = useTrillPicsStore(
      ({
        playerInstance,
        isPlaying,
      }) => ({
        playerInstance,
        isPlaying,
      })
    );


    return (
      <PillB
        {...resolveAccessibilityTitles(
          isPlaying ? "pause" : "play"
        )}
        onClick={() =>
          playerInstance?.toggle()
        }
        Icon={
          isPlaying
            ? IconsPause
            : IconsPlay
        }
        {...props}
      />
    );
  };
