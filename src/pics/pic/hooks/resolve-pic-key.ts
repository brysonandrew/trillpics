import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TCursorCell } from "~/pics/virtualize/context";

type TConfig = TCursorCell;
export const resolvePicKey = ({
  cell,
}: TConfig) => {
  return resolveCompositeKey(
    String(
      Math.floor(cell.column)
    ).padStart(2, "0"),
    String(
      Math.floor(cell.row)
    ).padStart(2, "0")
  );
};
export type TresolvePicKeyResult =
  ReturnType<
    typeof resolvePicKey
  >;
