import { TWebFonts } from "@brysonandrew/config-types";
import defaultTheme from "tailwindcss/defaultTheme";
type TFontFamilyKey =
  keyof typeof defaultTheme.fontFamily;
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
  name: string;
};
export const FONTS = [
  // {
  //   key: "title",
  //   name: withDefault("Saiba45"),
  //   provider: "none",
  // },
  {
    key: "title",
    name: withDefault("Dragon"),
    provider: "none",
  },
  {
    key: "display",
    name: withDefault("Conthrax"),
    provider: "none",
  },
  {
    key: "slab",
    name: withDefault("Armstrong3"),
    provider: "none",
  },
  {
    key: "sans",
    name: withDefault("Toxigenesis"),
    provider: "none",
  },
  {
    key: "mono",
    name: withDefault("Led Display 7"),
    provider: "none",
  },
] as const; //satisfies readonly TFontShareConfig[];
