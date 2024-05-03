import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/display";
import { isDefined } from "~/utils/validation/is/defined";


export const usePicZoomedCheckHandler =
  () => {
    const [searchParams] =
      useSearchParams();

    const handler = (key?: string) => {
      const searchParam =
        searchParams.get(
          SEARCH_PARAM_ID
        );
      const isPicZoomed = isDefined(key)
        ? key === searchParam
        : Boolean(searchParam);
      return isPicZoomed;
    };

    return handler
  };
