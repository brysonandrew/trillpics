import { resolvePreflights as _resolvePreflights } from "@brysonandrew/uno-preflights";
import { TColor } from "../index";

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
      textColorDark: colors['white-5'],
      inputBackgroundColorDark:
        colors["black-4"],
    },
    scrollbarConfig: {
      thumb: colors["white-5"],
      thumbBorder: colors["black"],
      thumbHover: colors["black"],
      backgroundColor:
        colors["white-5"],
      thumbDark: colors["black"],
      thumbBorderDark: colors["white-5"],
      thumbHoverDark: colors["white-5"],
      backgroundColorDark:
        colors["black"],
      borderWidth: 2,
      width: 12,
    },
  }),
];
