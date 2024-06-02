import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import type { FC } from "react";
import { VideoPicsCounter } from "~/pages/video/_root/video/pic-counter";

export const VideoPicCounterFloating: FC =
  () => {
    return (
      <VideoPicsCounter key="VideoPicsCounter" classValue="absolute -top-3 -right-3 z-40" {...PRESENCE_OPACITY} />
    );
  };
