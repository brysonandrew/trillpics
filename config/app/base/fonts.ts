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
    key: "display-led",
    name: withDefault(
      "led_display-7" 
    ),
    provider: "none",
  },
  {
    key: "mono",
    name: withDefault( 
      "DroidSansMono" 
    ),
    provider: "none",
  },
  {
    key: "mono-pix",
    name: withDefault(
      "joystix" 
    ),
    provider: "none",
  },
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
    key: "mono-narrow",
    name: withDefault(
      "NK57",
      "mono"
    ),
    provider: "none",
  },
];
