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
import { box } from "~uno/rules/box";
import { TypographyXs } from "~/components/layout/typography/xs";

type TProps = {
  midiHoverKey?:
    | TMidiHoverKey
    | THoverKey;
};
export const VideoMusicSynthHeaderNote: FC<
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
    <MeshBackgroundText
      classValue="center relative text-xs grow-0"
      style={{
        width: box.m175,
        height: box.m175,
        left:-box.m003125
      }}
    >
      <>
        {isNumber(midi) && (
          <div className="absolute top-1/2 left-1/2 -translate-1/2 column gap-1 pt-0.5">
            <TypographyXs>
              {midi}, {midiToNote(midi)}
            </TypographyXs>
            <TypographyXs>
              {midiToHz(midi).toFixed(
                2
              )}
              Hz
            </TypographyXs>
          </div>
        )}
      </>
    </MeshBackgroundText>
  );
};
