import { TDimensionsReady } from "@brysonandrew/config-types";

export const PADDING_Y = 48;
const PADDING_TOP = PADDING_Y / 2;
export const PADDING_Y_BOUNDS = {
  top: PADDING_TOP,
  bottom: PADDING_Y - PADDING_TOP,
} as const;

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
  const width = Math.min(
    screen.width,
    1024
  );
  const paddingX = screen.width - width;
  const paddingXHalf = paddingX / 2;
  return {
    isDimensions: true,
    width,
    height: screen.height - PADDING_Y,
    left: paddingXHalf,
    right: paddingXHalf,
    ...PADDING_Y_BOUNDS,
  } as const;
};

export type TMeasureContainerResult =
  ReturnType<typeof measureContainer>;
