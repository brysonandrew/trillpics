import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { picVideoReadInputs } from "~/hooks/pic/video/read/inputs";

export const usePicVideoWriteInputs =
  () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [searchParams] =
      useSearchParams();
    const {
      seconds,
      pics,
      isPics,
      count,
    } = picVideoReadInputs(
      searchParams
    );

    const clear = () => {
      searchParams.delete(
        SELECTED_PARAM_KEY
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    };
    return {
      seconds,
      pics,
      count,
      isPics,
      clear,
    };
  };
