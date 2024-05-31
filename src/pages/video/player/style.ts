import { useMemo } from "react";
import { boxSize } from "~/constants/box/size";
import { useContextReady } from "~/shell/ready/context";

export const useVideoPlayerStyle = () => {
  const {
    screen: { container },
  } = useContextReady();
  const s = boxSize();

  const style = useMemo(() => {
    const left = container.isMobile
      ? s.m05
      : container.isTablet
      ? s.m05
      : s.m15 + container.left;
    const width =
      container.width +
      (container.isMobile
        ? s.m
        : container.isTablet
        ? s.m
        : -s.m25);
    return {
      playerStyle: {
        left,
        width,
        gap: s.m05,
      },
      y: container.top + s.m15,
      gap: s.m05,
      screenHeight: width * (9 / 16),
    };
  }, [container]);

  return style;
};
export type TUseStyleResult =
  ReturnType<typeof useVideoPlayerStyle>;
