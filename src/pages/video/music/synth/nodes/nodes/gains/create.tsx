import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TUpdateNodeHandler } from "~/components/inputs/slider/types";
import { TGainNodeKey } from "~/pages/video/music/synth/nodes/gain/types";
import { TNodesSourceGainsProps } from "~/pages/video/music/synth/nodes/nodes/gains";
import { ControlsGain } from "~/pages/video/music/controls/gain";

export const useNodesSourceGainsCreate =
  ({
    musicKey,
    ampKey,
  }: TNodesSourceGainsProps) => {
    const { audio } = useMusicRefs();
    const result = useMemo(() => {
      const ui = (
        <ControlsGain
          musicKey={musicKey}
          ampKey={ampKey}
        />
      );
      return {
        processor: audio.gains.midis.master,
        ui,
      } as const;
    }, []);
    return result;
  };
