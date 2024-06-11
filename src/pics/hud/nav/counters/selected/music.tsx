import type { FC } from "react";
import { useSoundContext } from "~/shell/global/sound";
import { IconsCheckboxChecked } from "~/components/icons/inputs/checkbox/checked";
import { IconsCheckboxEmpty } from "~/components/icons/inputs/checkbox/empty";
import { IconsMute } from "~/components/icons/playback/mute";
import { IconsUnmute } from "~/components/icons/playback/unmute";

export const NavCountersSelectedMusic: FC =
  () => {
    const { audio } = useSoundContext();

    if (audio) {
      return (
        <div>
          <IconsUnmute />
        </div>
      );
    }
    return (
      <div>
        <IconsMute />
      </div>
    );
  };
