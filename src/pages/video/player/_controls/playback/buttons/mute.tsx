import { type FC } from "react";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { isNull } from "~/utils/validation/is/null";
import { IconsUnmute } from "~/components/icons/playback/unmute";
import { IconsMute } from "~/components/icons/playback/mute";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";
import { useVideoReadAudio } from "~/hooks/pic/video/read/audio/hook";

export const PlaybackButtonsMute: FC<
  Partial<TPillBProps>
> = (props) => {
  const { playerInstance, isMuted } =
    useContextPlayer_Ready();
  const audio = useVideoReadAudio();
  if (!audio) return null;

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
