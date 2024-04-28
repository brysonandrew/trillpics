import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/pages/directors-mode/pic/controls/use-pic-directors-mode";
import { TPic } from "~/store/slices/pics/types";
import { isDefined } from "~/utils/validation/is/defined";

export const usePicZoomedCheck = (
  name?: TPic
) => {
  const [searchParams] =
    useSearchParams();
  const searchParam = searchParams.get(
    SEARCH_PARAM_ID
  );
  const isPicZoomed = isDefined(name)
    ? name === searchParam
    : Boolean(searchParam);

  return isPicZoomed;
};
