import { useMemo } from "react";
import { useContextReady } from "~/shell/ready/context";
import { box } from "~uno/rules/box";

export const useVideoStyle = () => {
  const { screen } = useContextReady();
  const container = screen.container;

  const style = useMemo(() => {
    const left = container.isMobile
      ? box.m05
      : container.isTablet
      ? box.m05
      : box.m15 + container.left;
    const width =
      container.width +
      (container.isMobile
        ? box.m
        : container.isTablet
        ? box.m
        : -box.m25);
    const gap = box.m05;
    const y = container.top + box.m15;
    const beatsTop =
      y + box.m4 - box.m05 - box.m0125;
    const screenHeight =
      width * (9 / 16);
    const playerStyle = {
      left,
      width,
      gap,
    };
    const sidebarWidth =
      box.m15 + box.m025;
    return {
      sidebarWidth,
      beatsTop,
      sidebarWidthOffset:
        sidebarWidth + box.m025,
      playerStyle,
      y,
      screenHeight,
      containerHeight: container.height,
      viewHeight:
        screenHeight - box.m15,
      screen,
      ...playerStyle,
    };
  }, [container]);

  return style;
};
export type TUseStyleResult =
  ReturnType<typeof useVideoStyle>;
