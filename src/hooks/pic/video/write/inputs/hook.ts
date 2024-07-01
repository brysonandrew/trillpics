import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { SELECTED_PARAM_KEY } from "~/hooks/pic/constants";
import { picVideoReadInputs } from "~/hooks/pic/video/read/inputs";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";

export const usePicVideoWriteInputs =
  () => {
    const {fps} = useContextPlayer_Init();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [searchParams] =
      useSearchParams();
      const {
        schedule: {
          record: { bpm },
        },
      } = useMusicRefs();
    const {
      seconds,
      pics,
      isPics,
      count,
    } = picVideoReadInputs(
      searchParams,
      fps,bpm
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
