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
        colors["white-7"],
      textColorDark: colors['light'],
      inputBackgroundColorDark:
        colors["black-4"],
    },
    scrollbarConfig: {
      thumb: colors["dark"],
      thumbBorder: colors["black"],
      thumbHover: colors["gray"],
      backgroundColor:
        colors["dark"],
      thumbDark: colors["light"],
      thumbBorderDark: colors["white"],
      thumbHoverDark: colors["gray"],
      backgroundColorDark:
        colors["dark"],
      borderWidth: 1,
      width: 10,
    },
  }),
];
