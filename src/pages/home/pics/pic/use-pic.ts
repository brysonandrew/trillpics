import { useState } from "react";
import { useViewport } from "~/context/viewport";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/motion-cursor";
import {
  TImageDimensionsConfig,
  useImageDimensions,
} from "@brysonandrew/measure";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FULLSCREEN_Z } from "~/constants/dom";
import clsx from "clsx";
import { useVideoStore } from "~/store";
import { centerInViewport } from "~/utils/dimensions/center-in-viewport";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { resolvePicSrc } from "~/utils/src";
import { squareFromSize } from "~/utils/dimensions/square-from-size";
import { TPicProps } from "~/pages/home/pics/pic";
import { resolvePresence } from "@brysonandrew/motion-core";

export const SEARCH_PARAM_ID = "open";

export type TUsePicConfig = TPicProps;
export const usePic = ({
  cell,
  size,
  colIndex,
}: TUsePicConfig) => {
  const name =
    cell.row.original.cols[colIndex];

  const imageDimensions =
    squareFromSize({
      size,
      colIndex,
    });
  const {
    isControls,
    isVideoMode,
    addVideo,
    removeVideo,
    videoPics,
  } = useVideoStore();
  const src = resolvePicSrc(name);
  const videoOrder =
    videoPics.indexOf(name);
  const [isFront, setFront] =
    useState<boolean>(false);
  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const idParam = searchParams.get(
    SEARCH_PARAM_ID
  );
  const isOpen = idParam === name;
  const { isHover, handlers } =
    useHoverKey(
      NONE_CURSOR_KEY,
      name ?? ""
    );
  const onToggle = () => {
    if (isOpen) {
      searchParams.delete(
        SEARCH_PARAM_ID
      );
      handlers.onPointerLeave();
    } else {
      setFront(true);
      searchParams.set(
        SEARCH_PARAM_ID,
        name
      );
    }
    navigate(
      `${pathname}?${searchParams}`
    );
  };
  const viewport = useViewport();
  const boxDimensions: TImageDimensionsConfig["box"] =
    isOpen && viewport.isDimensions
      ? ({
          width: viewport.width,
          height: viewport.height,
        } as const)
      : imageDimensions;

  const dimensions = useImageDimensions(
    {
      box: boxDimensions,
      image: imageDimensions,
    }
  );
  if (isOpen) {
    console.log(
      boxDimensions,
      imageDimensions,
      dimensions
    );
  }

  const handleLayoutAnimationComplete =
    () => {
      if (!isOpen) {
        setFront(false);
      }
    };

  const isDimensions =
    dimensions.isDimensions &&
    viewport.isDimensions;

  const zIndex =
    isOpen || isFront
      ? FULLSCREEN_Z
      : 0;

  const isAdded = videoOrder > -1;

  const onClick = isVideoMode
    ? () =>
        videoOrder > -1
          ? removeVideo(name)
          : addVideo(name)
    : onToggle;

  const style = {
    zIndex,
    textAlign: "center",
    ...(isOpen && isDimensions
      ? ({
          position: "fixed",
          ...centerInViewport(
            dimensions,
            viewport
          ),
        } as const)
      : ({
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          ...imageDimensions,
        } as const)),
  } as const;

  if (isOpen) {
    console.log(
      style,
      isDimensions,
      isOpen
    );
  }

  return {
    isVideoMode,
    videoOrder,
    isControls,
    isAdded,
    isHover,
    isOpen,
    onToggle,
    boxProps: {
      className: clsx(
        "relative cursor-pointer"
      ),
      style: {
        ...imageDimensions,
        cursor: isVideoMode
          ? "pointer"
          : "zoom-in",
      },
      onClick,
      ...handlers,
    },
    picProps: {
      // key: resolveCompositeKey(
      //   name,
      //   isFront || isHover
      //     ? "up"
      //     : "down"
      // ),
      layoutId: isDimensions
        ? name
        : undefined,
      // layoutId:
      //   isFront || isHover
      //     ? name
      //     : undefined,
      src,
      alt: `░▒▓█ pic #${name} █▓▒░`,
      draggable: false,
      style,
      ...(isDimensions &&
      !isOpen &&
      !isFront
        ? resolvePresence(
            { opacity: 0.9 },
            { opacity: 1 }
          )
        : {}),
      onLayoutAnimationComplete:
        handleLayoutAnimationComplete,
    },
    backdropProps: {
      className: "inset-0 zoom-out",
      style: {
        zIndex: zIndex - 1,
        ...(viewport.isDimensions
          ? ({
              position: "fixed",
              ...boxDimensions,
            } as const)
          : ({} as const)),
        backdropFilter:
          "blur(40px) grayscale(100%)",
        cursor: "zoom-out",
      },
      onClick: onToggle,
    },
  };
};

export type TUsePic = ReturnType<
  typeof usePic
>;
