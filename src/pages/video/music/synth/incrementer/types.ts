import { TSequenceOptionsIncrementerKey } from "~/store/state/music/types";
import { TXyAxis } from "@brysonandrew/motion-config-types";
export type TIncrementType =
  | "up"
  | "down";
export type TIncrementerControlProps = {
  name: TSequenceOptionsIncrementerKey;
  isDisabled: boolean;
  type: TIncrementType;
  direction: TXyAxis;
};
