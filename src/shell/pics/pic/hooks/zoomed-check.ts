import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/directors-mode/use-pic-directors-mode";
import { isDefined } from "~/utils/validation/is/defined";

export const usePicZoomedCheck = (
  name?: string
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
