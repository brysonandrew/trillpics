import { cellDecrypt } from "~/hooks/pic/cell/decrypt";
import {
  OVER_CELL_PARAM_KEY,
  SIZE_PARAM_KEY,
} from "~/hooks/pic/constants";

export const resolveCellOver = (
  searchParams: URLSearchParams
) => {
  const paramValue = searchParams.get(
    OVER_CELL_PARAM_KEY
  );
  const cell =  paramValue
  ? cellDecrypt(paramValue)
  : null;
  const size = Number(
    searchParams.get(SIZE_PARAM_KEY)
  );

  return {
    paramValue,
    cell,
    size,
  };
};
