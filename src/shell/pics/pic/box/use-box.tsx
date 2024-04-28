import { useState } from "react";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/motion-cursor";
import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import { TPicProps } from "~/shell/pics/pic";
import { squareFromSize } from "~/utils/dimensions/square-from-size";
import { usePicZoomedCheck } from "~/shell/pics/pic/hooks/zoomed-check";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/display";
import { useTrillPicsStore } from "~/store";

type TConfig = TPicProps;
export const useBox = ({
  cell,
  size,
  colIndex,
}: TConfig) => {
  const { videoPics } =
    useTrillPicsStore(
      ({ videoPics }) => ({ videoPics })
    );
  const frontCheckState =
    useState<boolean>(false);
  const [_, setFront] = frontCheckState;

  const name =
    cell.row.original.columns[colIndex];

  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const { isHover, handlers } =
    useHoverKey(
      NONE_CURSOR_KEY,
      name ?? ""
    );
  const videoOrder =
    videoPics.indexOf(name);

  const cellDimensions = squareFromSize(
    {
      size,
      colIndex,
    }
  );

  const isPicZoomed =
    usePicZoomedCheck(name);

  const onZoomIn = () => {
    setFront(true);
    searchParams.set(
      SEARCH_PARAM_ID,
      name
    );
    navigate(
      `${pathname}?${searchParams}`
    );
  };

  const onZoomOut = () => {
    searchParams.delete(
      SEARCH_PARAM_ID
    );
    handlers.onPointerLeave();
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
    name,
    onToggle,
    onZoomIn,
    onZoomOut,
    videoOrder,
    isHover,
    isPicZoomed,
    handlers,
    cellDimensions,
    frontCheckState,
  };
};
export type TUseBox = ReturnType<
  typeof useBox
>;
export type TUseBoxChildProps = Omit<
  TUseBox,
  "isPicZoomed"
>;
