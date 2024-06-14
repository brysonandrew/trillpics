import type { FC } from "react";
import { LayoutOverlay } from "~/components/layout/overlay";
import {
  MIN_DEVICE_HEIGHT,
  MIN_DEVICE_WIDTH,
} from "~/shell/init/hooks/measure/measure";

export const ScreenTooSmallOverlay: FC =
  () => {
    return (
      <>
        <LayoutOverlay
          backdrop={
            <>
              <div className="fill bg-main-inverted" />
              <div className="fill _box-dots opacity-50" />
              <div className="fill _gradient-linear opacity-40" />
              <div className="fill _gradient-mesh opacity-60" />
            </>
          }
          direction="rtl"
          subtitle={`Your device's viewport is too small to use this app. Your device must have a screen of at least "${MIN_DEVICE_WIDTH}px" wide by "${MIN_DEVICE_HEIGHT}px" tall.`}
        >
          Screen too small
        </LayoutOverlay>
      </>
    );
  };
