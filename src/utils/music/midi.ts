import { TMidiValue } from "~/hooks/music/midis/types";

export const midiValueToNumber = (
  value: TMidiValue
) => {
  return (
    (Array.isArray(value)
      ? value[0]
      : value) ?? 0
  );
};
