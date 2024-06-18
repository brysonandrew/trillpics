import { TBeatValue } from "~/hooks/music/beats/types";
import { TMidiValue } from "~/hooks/music/midis/types";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { TMidiHoverKey } from "~/store/state/hover/types";
import { midiValueToNumber } from "~/utils/music/midi";
export const MIDI_HOVER_KEY_DELIMITER =
  "-";
export const resolveToMidiHoverKey = (
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
