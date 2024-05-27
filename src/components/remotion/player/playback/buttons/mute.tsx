import { type FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { isNull } from "~/utils/validation/is/null";
import { IconsUnmute } from "~/components/icons/playback/unmute";
import { IconsMute } from "~/components/icons/playback/mute";

export const PlaybackButtonsMute: FC<
  Partial<TPillBProps>
> = (props) => {
  const { playerInstance, isMuted } =
    useTrillPicsStore(
      ({
        playerInstance,
        isMuted,
      }) => ({
        playerInstance,
        isMuted,
      })
    );
  // const isMuted =
  //   !isNull(playerInstance) &&
  //   playerInstance.isMuted();

  return (
    <PillB
      {...resolveAccessibilityTitles(
        isMuted ? "unmute" : "mute"
      )}
      onClick={() => {
        if (isNull(playerInstance)) {
          console.log(
            "NO player instance"
          );
          return;
        }
        if (isMuted) {
          playerInstance.unmute();
          return;
        }
        playerInstance.mute();
      }}
      Icon={
        isMuted
          ? IconsMute
          : IconsUnmute
      }
      {...props}
    />
  );
};
