import { TDimensionsReady } from "@brysonandrew/config-types";

const PADDING_Y = 48;
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
  const container =
    document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);
  const width = container.clientWidth;
  const isDimensions =
    typeof width !== "undefined";
  const paddingX = screen.width - width;
  const paddingXHalf = paddingX / 2;
  document.body.removeChild(container);
  return isDimensions
    ? ({
        isDimensions: true,
        width,
        height:
          screen.height - PADDING_Y,
        left: paddingXHalf,
        right: paddingXHalf,
        ...PADDING_Y_BOUNDS,
      } as const)
    : ({
        isDimensions: false,
      } as const);
};

export type TMeasureContainerResult =
  ReturnType<typeof measureContainer>;
