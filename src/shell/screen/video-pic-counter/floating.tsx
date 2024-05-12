import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import type { FC } from "react";
import { VideoPicsCounter } from "~/shell/screen/video-pic-counter";

export const VideoPicCounterFloating: FC =
  () => {
    return (
      <VideoPicsCounter key="VideoPicsCounter" classValue="absolute -top-4 left-6 z-40" {...PRESENCE_OPACITY} />
    );
  };
