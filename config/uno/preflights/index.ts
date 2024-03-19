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
      textColorDark: colors.accent,
      inputBackgroundColorDark:
        colors["black-4"],
    },
    scrollbarConfig: {
      thumb: colors["gray"],
      thumbBorder: colors["gray-1"],
      thumbHover: colors["white-01"],
      backgroundColor:
        colors["white-7"],
      thumbDark: colors["secondary"],
      thumbBorderDark: colors["accent"],
      thumbHoverDark: colors["gray-3"],
      backgroundColorDark:
        colors["black-8"],
    },
  }),
];
