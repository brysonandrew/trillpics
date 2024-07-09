import defaultTheme from "tailwindcss/defaultTheme";
type TFontFamilyKey =
  keyof typeof defaultTheme.fontFamily;

const ARMSTRONG3_FONT_NAME =
  "Armstrong3";
export const FONT_NAMES = [
  ["Dragon", "title"],
  [ARMSTRONG3_FONT_NAME, "slab"],
  ["Toxigenesis", "sans"],
] as const;

const withDefault = (
  value: string,
  key = "sans"
): string[] => [
  `"${value}"`,
  ...defaultTheme.fontFamily[
    key as TFontFamilyKey
  ],
];
export const ARMSTRONG3_FULL_FONT_FAMILY =
  withDefault(
    ARMSTRONG3_FONT_NAME
  ).join(" ");

type TFontShareConfig = {
  key: string;
  provider: "none";
  name: string[];
};
export const FONTS: readonly TFontShareConfig[] =
  FONT_NAMES.map(([name, key]) => ({
    key,
    name: withDefault(name),
    provider: "none",
  }));
