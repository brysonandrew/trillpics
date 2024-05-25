import defaultTheme from "tailwindcss/defaultTheme";
type TFontFamilyKey =
  keyof typeof defaultTheme.fontFamily;

export const FONT_NAMES = [
  ["Dragon", "title"],
  ["Armstrong3", "slab"],
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
