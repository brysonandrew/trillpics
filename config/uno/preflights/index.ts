import { resolvePreflights as _resolvePreflights } from "@brysonandrew/uno-preflights";
import { resolveNeuShadow } from "@brysonandrew/uno-shortcuts";
import {
  boxBackgroundColorCss,
  boxBorderCss,
} from "@brysonandrew/utils-box";
import {
  GRADIENT_BLUE_PINK_YELLOW,
  GRADIENT_TEAL_YELLOW_PINK,
} from "../../app/color/gradient";
import { TColor } from "../index";
export const SCROLLBAR_WIDTH = 10;
export const SCROLLBAR_BORDER_WIDTH = 2;

const resolveScrollBarCssConfig = (
  colors: TColor
) => {
  const thumbCss = Object.entries(
    boxBorderCss({
      style: 'solid',
      width: `${SCROLLBAR_BORDER_WIDTH}px`,
      image: `${GRADIENT_TEAL_YELLOW_PINK} 2`,
      imageSlice: 4,
    })
  )
    .map((entry) => entry.join(": "))
    .join(";\n");

  const thumbDarkCss = Object.entries(
    boxBorderCss({
      style: 'solid',
      width: `${SCROLLBAR_BORDER_WIDTH}px`,
      image: `${GRADIENT_BLUE_PINK_YELLOW} 2`,
      imageSlice: 4,
    })
  )
    .map((entry) => entry.join(": "))
    .join(";\n");

  const result = {
    scrollbar: `width: ${SCROLLBAR_WIDTH + SCROLLBAR_BORDER_WIDTH * 2}px;\n${boxBackgroundColorCss(
      colors["black-6"]
    )}`,
    thumb: {
      idle: `background-color:${colors['black-2']};\n${thumbCss};\n`,
      hover: `box-shadow: ${
        resolveNeuShadow({
          size: 4,
          color: {
            fill: colors["white"],
            back: colors["white"],
          },
          blur: 8,
        }).fill
      };
      `,
    },
    dark: {
      scrollbar: `${boxBackgroundColorCss(
        colors["black-6"]
      )}`,
      thumb: {
        idle: `${thumbDarkCss};\nbackground-color:${colors['black']};\n`,
        hover: `box-shadow: ${
          resolveNeuShadow({
            size: 4,
            color: {
              fill: colors["white"],
              back: colors["white"],
            },
            blur: 8,
          }).fill
        };
        `,
      },
    },
  };
  return result;
};

export const resolvePreflights = <
  T extends object
>(
  colors: TColor
) => [
  ..._resolvePreflights<T>({
    inputConfig: {
      textColor: colors["black-1"],
      inputBackgroundColor:
        colors["white-5"],
      textColorDark: colors["white-5"],
      inputBackgroundColorDark:
        colors["black-4"],
    },
    scrollbarConfig:
      resolveScrollBarCssConfig(colors),
  }),
];
