import { THEME_FONT_SIZES_LOOKUP } from "~uno/index";
import { box } from "~uno/rules/box";

const NUMBER_FONT_SIZE =
  "xxxs" as const;
const [fontSize, lineHeight] =
  THEME_FONT_SIZES_LOOKUP[
    NUMBER_FONT_SIZE
  ];
const PADDING_LEFT = box.m003125;
const PADDING_RIGHT = box.m0125;
const MIN_WIDTH =
  box.m15 +
  PADDING_LEFT +
  PADDING_RIGHT;
const MAX_WIDTH = box.m2;

const SHARED = {
  minWidth: MIN_WIDTH,
  maxWidth: MAX_WIDTH,
};

export const INPUTS_NUMBER_SLIDER_STYLE =
  {
    paddingRight: PADDING_RIGHT,
    ...box.rb.m,
    ...SHARED,
  };

export const INPUTS_NUMBER_INPUT_STYLE =
  {
    fontSize,
    height: box.m,
    paddingTop: box.m05,
    paddingLeft: PADDING_LEFT,

    ...box.rt.m,
    ...SHARED,
  };

export const INPUTS_NUMBER_DROPDOWN_TITLE_STYLE =
  {
    top: 0,
    left: 0,
    fontSize,
    height: box.m05,

    paddingTop:0,// box.m0125,
    paddingLeft: box.m00625,
    ...box.rt.m,
    ...SHARED,
  };
export const INPUTS_NUMBER_DROPDOWN_STYLE =
  {
    fontSize,
    lineHeight: box.m0625,
    height: box.m,
    paddingTop: box.m0125,
    paddingRight: PADDING_RIGHT,
    paddingLeft: PADDING_LEFT,
    ...box.rb.m,
    ...SHARED,
  };
export const INPUTS_NUMBER_BOX_STYLE = {
  lineHeight: box.m0625,
  ...box.r.m,
  ...SHARED,
};
