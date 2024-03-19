import defaultTheme from "tailwindcss/defaultTheme";
type TFontFamilyKey =
  keyof typeof defaultTheme.fontFamily;
const withDefault = (
  value: string,
  key = "sans"
) => [
  `"${value}"`,
  ...defaultTheme.fontFamily[
    key as TFontFamilyKey
  ],
];

export const FONTS: any[] = [
  {
    key: "sans",
    name: withDefault(
      "FFF Forward"
    ),
    provider: "none",
  },
  {
    key: "display",
    name:  withDefault(
      "Saiba 45"
    ),
    provider: "none",
  },
  {
    key: "display-outline",
    name:withDefault(
      "Saiba 45 Outline"
    ),
    provider: "none",
  },
 
  {
    key: "mono",
    name: withDefault(
      "NK57",
      "mono"
    ),
    provider: "none",
  },
];
