import { useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import { usePicZoomedCheck } from "~/shell/pics/pic/hooks/zoomed-check";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/display";
import { TPicProps } from "~/shell/pics/pic";

type TConfig = TPicProps;
export const useBox = (
  props: TConfig
) => {
  const name = props.name;
  const frontCheckState =
    useState<boolean>(false);
  const [_, setFront] = frontCheckState;

  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();

  const navigate = useNavigate();

  const isPicZoomed =
    usePicZoomedCheck(name);

  const onZoomIn = () => {
    setFront(true);
    searchParams.set(
      SEARCH_PARAM_ID,
      String(name)
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const onZoomOut = () => {
    searchParams.delete(
      SEARCH_PARAM_ID
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const onToggle = () => {
    if (isPicZoomed) {
      onZoomOut();
    } else {
      onZoomIn();
    }
  };
  return {
    onToggle,
    onZoomIn,
    onZoomOut,
    isPicZoomed,
    frontCheckState,
  };
};
export type TUseBox = ReturnType<
  typeof useBox
>;
