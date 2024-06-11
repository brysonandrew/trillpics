import type { FC } from "react";
import { useSoundContext } from "~/shell/global/sound";
import { IconsCheckboxChecked } from "~/components/icons/inputs/checkbox/checked";
import { IconsCheckboxEmpty } from "~/components/icons/inputs/checkbox/empty";

export const NavCountersSelectedMusic: FC =
  () => {
    const { audioSrc } =
      useSoundContext();

    if (audioSrc) {
      return (
        <div className="absolute top-0 right-0">
          <IconsCheckboxChecked />
        </div>
      );
    }
    return (
      <div>
        <IconsCheckboxEmpty />
      </div>
    );
  };
