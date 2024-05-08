import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/pics/pic/display";
import { resolvePicKey } from "~/pics/pic/hooks/resolve-pic-key";
import { TCursorCell } from "~/pics/virtualize/cursor";

type TConfig = TCursorCell;
export const useBox = (
  cursor: TConfig
) => {
  const key = resolvePicKey(cursor);
  const [searchParams] =
    useSearchParams();

  const searchParam = searchParams.get(
    SEARCH_PARAM_ID
  );

  const isOpen = key === searchParam;

  return isOpen;
};
export type TUseBox = ReturnType<
  typeof useBox
>;
