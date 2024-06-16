import type { FC } from "react";
import { THoverKey } from "@brysonandrew/hooks-dom";
import { isMidiHoverKey } from "~/components/charts/grid/is-midi-hover-key";
import { MIDI_HOVER_KEY_DELIMITER } from "~/components/charts/grid/to-midi-hover-key";
import { MeshBackgroundText } from "~/components/layout/background/mesh/text";
import { TMidiHoverKey } from "~/store/state/hover/types";
import {
  midiToHz,
  midiToNote,
} from "~/utils/music";
import { isNumber } from "~/utils/validation/is/number";
import { boxSize } from "~uno/rules/box/size";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";

type TProps = {
  midiHoverKey?:
    | TMidiHoverKey
    | THoverKey;
};
export const VideoMusicSynthHeaderNote: FC<
  TProps
> = ({ midiHoverKey }) => {
  const s = boxSize();

  const midi = isMidiHoverKey(
    midiHoverKey
  )
    ? Number(
        midiHoverKey.split(
          MIDI_HOVER_KEY_DELIMITER
        )[1]
      )
    : null;
  return (
    <MeshBackgroundText
      classValue="center relative text-xs grow-0"
      style={{
        width: s.m2,
        height: s.m2,
      }}
    >
      <>
        {isNumber(midi) && (
          <div className="absolute top-1/2 left-1/2 -translate-1/2 column">
            <div className="relative text-center text-xs">
              {midi}
            </div>
            <div className="relative text-center text-xs">
              {midiToHz(midi).toFixed(
                2
              )}
              Hz
            </div>
            <div className="relative text-center text-xs">
              {midiToNote(midi)}
            </div>
          </div>
        )}
      </>
    </MeshBackgroundText>
  );
};
