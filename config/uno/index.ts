import { defineConfig } from "unocss";
import {
  resolveTheme,
  THEME_FONT_SIZE,
} from "@brysonandrew/uno-theme";
import { SPACING } from "@brysonandrew/uno-spacing";
import { resolvePreflights } from "./preflights";
import { SHORTCUTS } from "./shortcuts";
import { TRANSFORMERS } from "./transformers";
import { resolvePresets } from "./presets";
import { resolveRules } from "./rules";
import {
  COLOR_VARS_RECORD,
  TColorKey,
} from "./color/index";

export const screen = {
  xxxs: "280px",
  xxs: "320px",
  xs: "375px",
  sm: "480px",
  md: "768px",
  lg: "900px",
  xl: "1100px",
  xxl: "1420px",
  xxxl: "1740px",
  xxxxl: "2280px",
} as const;

const width = {
  sm: "480px",
  md: "700px",
  lg: "890px",
  xl: "1090px",
  xxl: "1400px",
  xxxl: "1800px",
  xxxxl: "2200px",
} as const;

export const THEME_FONT_SIZES_LOOKUP = {
  xxxxs: ["0.4rem", "0.625rem"],
  xxxs: ["0.65rem", "0.75rem"],
  xxs: ["0.7rem", "1.25rem"],
  "4xl": ["2.25rem", "2.5rem"],
  "4.5xl": ["2.5rem", "2.75rem"],
  "11xl": ["14rem", "17rem"],
} as const;

export const theme = resolveTheme({
  colors: COLOR_VARS_RECORD,
  spacing: SPACING,
  maxWidth: {
    shell: "1480px",
  },
  width,
  screen,
  fontSize: {
    ...THEME_FONT_SIZE,
    ...THEME_FONT_SIZES_LOOKUP,
  },
  extend: {
    keyframes: {
      "ant-walk": {
        to: { strokeDashoffset: "0" },
      },
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
    },
  },
});

type TTheme = typeof theme;

export type TColor = Record<
  TColorKey,
  `var(--${string})`
>;

const rules = resolveRules<TTheme>();

const shortcuts = SHORTCUTS;

const presets =
  resolvePresets<TTheme>();

const preflights =
  resolvePreflights<TTheme>(
    COLOR_VARS_RECORD
  );

const transformers = TRANSFORMERS;

const config = defineConfig<TTheme>({
  theme,
  rules,
  shortcuts,
  presets,
  preflights,
  transformers,
  layers: {
    reset: -1,
  },
});

export type TBreakpointKey =
  keyof typeof screen;

export type TAnyTheme = TTheme & any;
export default config;
