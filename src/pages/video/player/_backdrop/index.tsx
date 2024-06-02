import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import {
  Link,
  useSearchParams,
} from "react-router-dom";
import { VIDEO_ROUTE } from "~/constants/params";

export const VideoPlayer_Backdrop =
  () => {
    const [searchParams] =
      useSearchParams();

    return (
      <Link
        className="fill"
        to={`${VIDEO_ROUTE}?${searchParams}`}
      >
        <PicBackdrop />
      </Link>
    );
  };
