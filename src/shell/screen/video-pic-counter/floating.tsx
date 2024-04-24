import type { FC } from "react";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";

export const VideoPicCounterFloating: FC =
  () => {
    return (
      <VideoPicsCounter classValue="absolute -top-4 left-6" />
    );
  };
