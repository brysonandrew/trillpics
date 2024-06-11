import { useMemo } from "react";
import { boxSize } from "~uno/rules/box/size";
import { useReadyContext } from "~/shell/ready/context";

export const useVideoPlayerStyle =
  () => {
    const {
      screen: { container },
    } = useReadyContext();
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
      const gap = s.m05;

      const playerStyle = {
        left,
        width,
        gap,
      };
      const sidebarWidth = s.m15 + s.m025
      return {
        sidebarWidth,
        sidebarWidthOffset:sidebarWidth+ s.m025,
        playerStyle,
        y: container.top + s.m15,
        screenHeight: width * (9 / 16),
        ...playerStyle,
      };
    }, [container]);

    return style;
  };
export type TUseStyleResult =
  ReturnType<
    typeof useVideoPlayerStyle
  >;
