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
import { TypographyXs } from "~/components/layout/typography/xs";
import { box } from "~uno/rules/box";

type TProps = {
  midiHoverKey?:
    | TMidiHoverKey
    | THoverKey;
};
export const VideoMusicSynthHeaderNoteDisplay: FC<
  TProps
> = ({ midiHoverKey }) => {
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
    <>
      {isNumber(midi) && (
        <MeshBackgroundText
          classValue="column center relative text-xxs grow"
          style={{
            gap: box.m0125,
            ...box.px(box.m0125),
          }}
        >
          <TypographyXs>
            {midi}, {midiToNote(midi)}
          </TypographyXs>
          <TypographyXs>
            {midiToHz(midi).toFixed(2)}
            Hz
          </TypographyXs>
        </MeshBackgroundText>
      )}
    </>
  );
};
