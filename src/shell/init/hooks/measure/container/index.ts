import { TDimensionsReady } from "@brysonandrew/config-types";
import { boxSize } from "~/constants/box/size";
const MAX_WIDTH = 1280;
export const measureContainer = (
  screen: Omit<
    TDimensionsReady,
    "isDimensions"
  >
) => {
  const s = boxSize();
  const width =
    Math.min(screen.width, MAX_WIDTH) -
    s.m2;
  const playerHeight = (width * 9) / 16;
  const height = screen.height - s.m2;
  const paddingX = Math.max(
    screen.width - width,
    s.m
  );
  const pX05 = paddingX / 2;
  const paddingY = Math.max(
    screen.height - height,
    s.m
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
  } as const;
};

export type TMeasureContainerResult =
  ReturnType<typeof measureContainer>;
