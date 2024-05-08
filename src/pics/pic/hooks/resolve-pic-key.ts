import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TCursorCell } from "~/pics/virtualize/cursor";

type TConfig = TCursorCell;
export const resolvePicKey = ({
  column,row,
}: TConfig) => {
  return resolveCompositeKey(
    String(
      Math.floor(column)
    ).padStart(2, "0"),
    String(
      Math.floor(row)
    ).padStart(2, "0")
  );
};
export type TresolvePicKeyResult =
  ReturnType<
    typeof resolvePicKey
  >;
