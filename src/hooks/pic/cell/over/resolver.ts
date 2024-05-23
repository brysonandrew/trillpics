import { cellDecrypt } from "~/hooks/pic/cell/decrypt";
import {
  CELL_PARAM_KEY,
  SIZE_PARAM_KEY,
} from "~/hooks/pic/constants";

export const resolveCellOver = (
  searchParams: URLSearchParams
) => {
  const paramValue = searchParams.get(
    CELL_PARAM_KEY
  );
  const cell =  paramValue
  ? cellDecrypt(paramValue)
  : null;
  const size = Number(
    searchParams.get(SIZE_PARAM_KEY)
  );

  return {
    cell,
    size,
  };
};
