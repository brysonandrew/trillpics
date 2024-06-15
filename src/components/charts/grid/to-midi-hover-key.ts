import { TBeatValue } from "~/hooks/music/beats/types";
import { TMidiValue } from "~/hooks/music/midis/types";
import { cellEncrypt } from "~/hooks/pic/cell/encrypt";
import { TMidiHoverKey } from "~/store/state/hover/types";
export const MIDI_HOVER_KEY_DELIMITER = '-'
export const resolveToMidiHoverKey = (
  value: TBeatValue | TMidiValue,
  column:number,
  row:number
): TMidiHoverKey | null => {
  if (value === null) return null;
  const key = cellEncrypt({column,row})
  return `midi${MIDI_HOVER_KEY_DELIMITER}${value}${MIDI_HOVER_KEY_DELIMITER}${key}`;
}