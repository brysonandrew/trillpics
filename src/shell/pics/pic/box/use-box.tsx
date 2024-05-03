import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/display";
import { resolveResolvePicKey } from "~/shell/pics/pic/hooks/resolve-pic-key";
import { TCursorCell } from "~/shell/pics/virtualize/context";

type TConfig = TCursorCell;
export const useBox = (
  cursor: TConfig
) => {
  const key =
    resolveResolvePicKey(cursor);
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
