import { isMidiHoverKey } from "~/components/charts/grid/is-midi-hover-key";
import { TBeatValue } from "~/hooks/music/beats/types";
import { TMidiValue } from "~/hooks/music/midis/types";
import { cellDecrypt } from "~/hooks/pic/cell/decrypt";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { TMidiHoverKey } from "~/store/state/hover/types";
import { midiValueToNumber } from "~/utils/music/midi";
export const MIDI_HOVER_KEY_DELIMITER =
  "-";
export const encryptMidiHoverKey = (
  value: TBeatValue | TMidiValue,
  column: number,
  row: number
): TMidiHoverKey | null => {
  if (value === null) return null;
  const key = cellEncrypt({
    column,
    row,
  });
  const n = midiValueToNumber(value);
  return `midi${MIDI_HOVER_KEY_DELIMITER}${n}${MIDI_HOVER_KEY_DELIMITER}${key}`;
};
export const decryptHoverParts = (
  hoverKey: TMidiHoverKey
) => {
  if (!isMidiHoverKey(hoverKey))
    return null;
  const parts = hoverKey.split(
    MIDI_HOVER_KEY_DELIMITER
  );
  const [_, midi, cellKey] = parts;
  const cell = cellDecrypt(cellKey);
  return {
    midi,
    ...cell,
  };
};
