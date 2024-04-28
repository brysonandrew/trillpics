import { useState } from "react";
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
import { useHoverKey } from "~/hooks/use-hover-key";

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
    useHoverKey();
  const isHovering = isHover(name);
  const hoverHandlers = handlers(name);
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
    hoverHandlers.onPointerOut();
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
    isHovering,
    isPicZoomed,
    handlers: hoverHandlers,
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
