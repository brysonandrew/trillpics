import { useLoop as _useLoop } from "../useLoop";
import { useBass } from "./useBass";
import { usePitch } from "./usePitch";

export const useLoop = () => {
  const pitch = usePitch();
  const bass = useBass();
  const loop = _useLoop({
    drones: [],
    pulses: [bass,pitch],

  });
  return loop;
};
