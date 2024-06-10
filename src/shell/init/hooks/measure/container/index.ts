import { TDimensionsReady } from "@brysonandrew/config-types";
import { boxSize } from "~uno/rules/box/size";
const MAX_WIDTH = 1020;
export const measureContainer = (
  screen: Omit<
    TDimensionsReady,
    "isDimensions"
  >
) => {
  const s = boxSize();
  const isMobile = screen.width < 450;
  const isTablet = screen.width < 769;

  const padding = s.m2;
  const width =
    Math.min(screen.width, MAX_WIDTH) -
    padding;
  const playerHeight = (width * 9) / 16;
  const height =
    screen.height - padding;
  const paddingX = Math.max(
    screen.width - width,
    padding
  );
  const pX05 = paddingX / 2;
  const paddingY = Math.max(
    screen.height - height,
    padding
  );
  const pY05 = paddingY / 2;
  return {
    isDimensions: true,
    width,
    playerHeight,
    height,
    left: pX05 - s.m0125,
    right: pX05 + s.m0125,
    top: pY05,
    bottom: pY05,
    isMobile,
    isTablet,
  } as const;
};

export type TMeasureContainerResult =
  ReturnType<typeof measureContainer>;
