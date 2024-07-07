import { useMemo } from "react";
import { useContextReady } from "~/shell/ready/context";
import { box } from "~uno/rules/box";

export const useVideoStyle = () => {
  const { screen } = useContextReady();
  const container = screen.container;

  const style = useMemo(() => {
    const left = container.isMobile
      ? box._05
      : container.isTablet
      ? box._05
      : box._15 + container.left;
    const width =
      container.width +
      (container.isMobile
        ? box._
        : container.isTablet
        ? box._
        : -box._25);
    const gap = box._05;
    const y = container.top + box._15;
    const beatsTop =
      y + box._4 - box._05 - box._0125;
    const screenHeight =
      width * (9 / 16);
    const playerStyle = {
      left,
      width,
      gap,
    };
    const sidebarWidth =
      box._15 + box._025;
    return {
      sidebarWidth,
      beatsTop,
      sidebarWidthOffset:
        sidebarWidth + box._025,
      playerStyle,
      y,
      screenHeight,
      containerHeight: container.height,
      viewHeight:
        screenHeight,
      screen,
      ...playerStyle,
    };
  }, [container]);

  return style;
};
export type TUseStyleResult =
  ReturnType<typeof useVideoStyle>;
