import type { FC } from "react";
import {
  PicDisplay,
  SEARCH_PARAM_ID,
  TPicDisplayProps,
} from "~/pics/pic/display";
import { FULLSCREEN_Z } from "~/constants/dom";
import { TPicHoverResult } from "~/pics/pic/use-hover";
import { TImgMotionProps } from "@brysonandrew/config-types";
import { TBoxChildProps } from "~/pics/pic/box";
import { resolvePresence } from "~/utils/animation";
import { resolveResolvePicKey } from "~/pics/pic/hooks/resolve-pic-key";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { TCursorCell } from "~/pics/virtualize/context";

export const PicDisplayCell: FC<
  Partial<TPicHoverResult> &
    TPicDisplayProps &
    TCursorCell &
    TBoxChildProps &
    Pick<TImgMotionProps, "onTap">
> = ({
  style: { left, width, height },
  cell,
  ...props
}) => {
  const key = resolveResolvePicKey({
    cell,
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] =
    useSearchParams();

  const searchParam = searchParams.get(
    SEARCH_PARAM_ID
  );
  const isFront =
    `${key}--closing` === searchParam;

  const handleDone = () => {
    searchParams.delete(
      SEARCH_PARAM_ID
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const handleLayoutAnimationComplete =
    handleDone;
  return (
    <PicDisplay
      style={{
        position: "absolute",
        left,
        top: 0,
        bottom: 0,
        right: 0,
        width,
        height,
        ...(isFront
          ? { zIndex: FULLSCREEN_Z }
          : { zIndex: 0 }),
      }}
      {...(isFront
        ? {}
        : resolvePresence(
            { opacity: 0.9 },
            { opacity: 1 }
          ))}
      onLayoutAnimationComplete={
        handleLayoutAnimationComplete
      }
      {...props.handlers}
      {...props}
    />
  );
};
