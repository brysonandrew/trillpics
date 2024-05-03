import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TCursorCell } from "~/shell/pics/virtualize/context";

type TConfig = TCursorCell;
export const resolveResolvePicKey = ({
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
export type TResolveResolvePicKeyResult =
  ReturnType<
    typeof resolveResolvePicKey
  >;
