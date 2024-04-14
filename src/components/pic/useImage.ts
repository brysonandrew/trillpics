import { useState } from "react";
import { useViewport } from "@shell/providers/context/viewport";
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from "@brysonandrew/cursor";
import {
  TImageDimensionsConfig,
  useImageDimensions,
} from "@hooks/image/useImageDimensions";
import { TDimensions } from "@t/measure";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { FULLSCREEN_Z } from "@constants/dom";
import { useVideoStore } from "src/store";
import clsx from "clsx";
import { resolveViewportSelfCenter } from "./resolveViewportSelfCenter";
export const SEARCH_PARAM_ID = "open";

export type TUseImageConfig =
  TDimensions & {
    name: string;
  };
export const useImage = ({
  name,
  ...config
}: TUseImageConfig) => {
  const {
    isVideoMode,
    addVideo,
    removeVideo,
    videoPics,
  } = useVideoStore();
  const videoOrder =
    videoPics.indexOf(name);
  const { width, height } = config;
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
  const handleToggle = () => {
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
  const imageDimensions = {
    width,
    height,
  };
  const boxDimensions: TImageDimensionsConfig["box"] =
    isOpen && viewport.isDimensions
      ? ({
          width: viewport.width,
          height: viewport.height,
        } as const)
      : config;

  const dimensions = useImageDimensions(
    {
      box: boxDimensions,
      image: imageDimensions,
    }
  );

  const handleLayoutAnimationComplete =
    () => {
      if (!isOpen) {
        setFront(false);
      }
    };

  const isDimensions =
    dimensions.isDimensions &&
    viewport.isDimensions;

  const zIndex = isFront
    ? FULLSCREEN_Z
    : 0;

  return {
    isHover,
    isOpen,
    boxProps: {
      className: clsx("relative cursor-pointer"),
      style: {
        ...imageDimensions,
        cursor: isVideoMode
          ? "pointer"
          : "zoom-in",
      },
      onClick: isVideoMode
        ? () =>
            videoOrder > -1
              ? removeVideo(name)
              : addVideo(name)
        : handleToggle,
      ...handlers,
    },
    designProps: {
      initial: false,
      layout: true,
      style: {
        zIndex,
        ...(isOpen && isDimensions
          ? ({
              position: "fixed",
              ...resolveViewportSelfCenter(
                viewport,
                dimensions
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
      } as const,
      animate: {
        opacity: isDimensions ? 1 : 0,
      },
      onLayoutAnimationComplete:
        handleLayoutAnimationComplete,
    },
    backdropProps: {
      className:
        "inset-0 z-60 fade-in-animation zoom-out",
      style: {
        zIndex: FULLSCREEN_Z - 1,
        ...(viewport.isDimensions
          ? ({
              position: "fixed",
              width: viewport.width,
              height: viewport.height,
            } as const)
          : ({} as const)),
        backdropFilter:
          "blur(40px) grayscale(100%)",
        cursor: "zoom-out",
      },
      onClick: handleToggle,
    },
    onToggle: handleToggle,
    isVideoMode,
    videoOrder,
  };
};

export type TUseImageReturn =
  ReturnType<typeof useImage>;
