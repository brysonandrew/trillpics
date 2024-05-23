import { TDimensionsReady } from "@brysonandrew/config-types";
import { boxSize } from "~/constants/box/size";

export const measureContainer = (
  screen: Omit<
    TDimensionsReady,
    "isDimensions"
  >
) => {
  // const container =
  //   document.createElement("div");
  // container.className = "container";
  // document.body.appendChild(container);
  const s = boxSize();
  const width =
    Math.min(screen.width, 1024) - s.m2;
  const height = screen.height - s.m2;
  const paddingX = screen.width - width;
  const pX05 = paddingX / 2;
  const paddingY = screen.height - height;
  const pY05 = paddingY / 2;
  return {
    isDimensions: true,
    width,
    height,
    left: pX05,
    right: pX05,
    top: pY05,
    bottom: pY05,
  } as const;
};

export type TMeasureContainerResult =
  ReturnType<typeof measureContainer>;
