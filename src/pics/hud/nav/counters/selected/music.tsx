import type { FC } from "react";
import { useSoundContext } from "~/shell/global/sound";
import { IconsMute } from "~/components/icons/playback/mute";
import { IconsTick } from "~/components/icons/tick";
import { BackgroundMeshRadialFlat } from "~/components/layout/background/mesh-radial-flat";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { BackgroundMesh } from "~/components/layout/background/mesh";

export const NavCountersSelectedMusic: FC =
  () => {
    const { audio } = useSoundContext();
    const s = boxSize();
    const borderRadius = boxRadius();
    if (audio) {
      return (
        <div
          className="relative center"
          style={{
            width: s.m05,
            height: s.m05,
            borderRadius,
          }}
        >
          <BackgroundMesh />

          <IconsTick />
        </div>
      );
    }
    return (
      <div
        className="relative center z-10"
        style={{
          width: s.m05,
          height: s.m05,
          padding: s.m025,
          borderRadius,
        }}
      >
        <BackgroundMesh />

        <IconsMute size={14} />
      </div>
    );
  };
