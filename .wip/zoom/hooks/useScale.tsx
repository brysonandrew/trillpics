import {
  clamp,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import { useEventListener } from "@brysonandrew/hooks-events/useEventListener";
import {
  TSharedConfig,
  SCALE,
  CURSOR_SIZE_HALF,
  DELTA_FACTOR,
  WHEEL_DELTA_THRESHOLD,
} from "~/components/zoom/config";

type TConfig = TSharedConfig;
export const useScale = ({
  imageWidth,
  imageHeight,
  cursorX,
  cursorY,
  container,
}: TConfig) => {
  const [scale, setScale] =
    useState<number>(SCALE.INIT);

  const copyImageWidth =
    imageWidth * scale;
  const copyImageHeight =
    imageHeight * scale;
  const resolveCopyTransform = (
    v: number
  ) => -(v * scale - CURSOR_SIZE_HALF);
  const copyImageX = useTransform(
    cursorX,
    resolveCopyTransform
  );
  const copyImageY = useTransform(
    cursorY,
    resolveCopyTransform
  );

  const resolveClampedScale = (
    value: number
  ) =>
    clamp(
      SCALE.MIN,
      SCALE.MAX,
      Math.abs(value)
    );

  const handleTuneScale = (
    delta: number
  ) => {
    const handleScale = (
      prev: number,
      delta: number
    ) => {
      let next =
        prev + delta * DELTA_FACTOR;
      next = resolveClampedScale(next);
      return next;
    };

    if (delta > WHEEL_DELTA_THRESHOLD) {
      setScale((prev) =>
        handleScale(prev, delta)
      );
    }
    if (delta < WHEEL_DELTA_THRESHOLD) {
      setScale((prev) =>
        handleScale(prev, delta)
      );
    }
  };

  const handleWheel = ({
    deltaY,
  }: WheelEvent) =>
    handleTuneScale(deltaY);

  useEventListener<
    "wheel",
    typeof container
  >(
    "wheel",
    handleWheel,
    { current: container },
    {
      passive: true,
    }
  );

  const handleJumpScale = () => {
    setScale((prev) => {
      const next = prev * 2;
      if (
        prev === SCALE.MAX ||
        prev === SCALE.MIN ||
        next >= SCALE.MAX ||
        next <= SCALE.MIN
      )
        return SCALE.INIT;
      return next;
    });
  };

  return {
    scale,
    onJumpScale: handleJumpScale,
    onTuneScale: handleTuneScale,
    style: {
      x: copyImageX,
      y: copyImageY,
      width: copyImageWidth,
      height: copyImageHeight,
    },
  };
};
