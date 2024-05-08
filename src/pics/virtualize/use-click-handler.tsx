import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/pics/pic/display";
import { usePicZoomedCheckHandler } from "~/pics/pic/hooks/zoomed/check-handler";
import { resolvePicKey } from "~/pics/pic/hooks/resolve-pic-key";
import { TCursor } from "~/pics/virtualize/cursor";

export type TClickHandlerConfig =
  TCursor;
export const useClickHandler = () => {
  const frontCheckState =
    useState<boolean>(false);
  const [isFront, setFront] =
    frontCheckState;
  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const checkPicZoomed =
    usePicZoomedCheckHandler();

  const paramValue = searchParams.get(
    SEARCH_PARAM_ID
  );

  const handler = (
    cursor: TClickHandlerConfig
  ) => {
    const key = resolvePicKey(cursor);

    if (paramValue) {
      searchParams.set(
        SEARCH_PARAM_ID,
        `${paramValue}--closing`
      );
      navigate(
        `${pathname}?${searchParams}`
      );
    } else {
      searchParams.set(
        SEARCH_PARAM_ID,
        String(key)
      );

      navigate(
        `${pathname}?${searchParams}`
      );
      setFront(true);
    }
  };
  return handler;
};
