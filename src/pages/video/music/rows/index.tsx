import { FC } from "react";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicRowsDrums } from "~/pages/video/music/rows/drums";
import { usePresetsValueLookup } from "~/pages/video/music/rows/preset-value";
import { MusicRowsSynth } from "~/pages/video/music/rows/synth";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const MusicRows: FC = () => {
  const s = boxSize();
  const play = usePlayBeats();
  const playMidis = usePlayMidis();

  const { music, set } =
    useTrillPicsStore(
      ({ music, set }) => ({
        music,
        set,
      })
    );
  const presetsValueLookup =
    usePresetsValueLookup();

  return (
    <div
      className="relative column-stretch lg:row-start"
      style={{ gap: s.m }}
    >
      <MusicRowsSynth />
      <MusicRowsDrums />
      
    </div>
  );
};
