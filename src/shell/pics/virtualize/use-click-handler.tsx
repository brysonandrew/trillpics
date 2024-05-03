import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/display";
import { usePicZoomedCheckHandler } from "~/shell/pics/pic/hooks/zoomed-check-handler";
import { resolveResolvePicKey } from "~/shell/pics/pic/hooks/resolve-pic-key";
import { TCursor } from "~/shell/pics/virtualize/context";

export type TClickHandlerConfig =
  TCursor;
export const useClickHandler = () => {
  const frontCheckState =
    useState<boolean>(false);
  const [_, setFront] = frontCheckState;
  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const checkPicZoomed =
    usePicZoomedCheckHandler();
  const handler = (
    cursor: TClickHandlerConfig
  ) => {
    const key =
      resolveResolvePicKey(cursor);

    if (checkPicZoomed(key)) {
      searchParams.set(
        SEARCH_PARAM_ID,
        `${String(key)}--closing`
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    } else {
      setFront(true);
      searchParams.set(
        SEARCH_PARAM_ID,
        String(key)
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    }
  };
  return handler;
};
