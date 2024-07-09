import { THEME_FONT_SIZES_LOOKUP } from "~uno/index";
import { box } from "~uno/rules/box";

const NUMBER_FONT_SIZE =
  "xxxs" as const;
const [fontSize, lineHeight] =
  THEME_FONT_SIZES_LOOKUP[
    NUMBER_FONT_SIZE
  ];
const PADDING_LEFT = box._003125;
const PADDING_RIGHT = box._0125;
const MIN_WIDTH =
  box._2 + PADDING_LEFT + PADDING_RIGHT;
const MAX_WIDTH = box._2;

const SHARED = {
  minWidth: MIN_WIDTH,
  maxWidth: MAX_WIDTH,
};

export const INPUTS_NUMBER_SLIDER_STYLE =
  {
    paddingRight: PADDING_RIGHT,
    height: box._05,
    ...box.rb.m,
    ...SHARED,
  };
export const INPUTS_NUMBER_SLIDER_STYLE_SM =
  {
    ...INPUTS_NUMBER_SLIDER_STYLE,
    height: box._025,
  };

export const INPUTS_NUMBER_INPUT_STYLE =
  {
    fontSize,
    height: box._,
    paddingTop: box._05,
    paddingLeft: PADDING_LEFT,
    ...box.rt.m,
    ...SHARED,
  };

export const INPUTS_NUMBER_INPUT_STYLE_SM =
  {
    ...INPUTS_NUMBER_INPUT_STYLE,
    height: box._05,
    paddingTop: 0,
    paddingLeft: "50%",
    textAlign: "right",
  } as const;
export const INPUTS_NUMBER_DROPDOWN_TITLE_STYLE =
  {
    top: 0,
    left: 0,
    fontSize,
    height: box._05,
    paddingTop: 0, // box._0125,
    paddingLeft: box._00625,
    ...box.rt.m,
    ...SHARED,
  };
export const INPUTS_NUMBER_DROPDOWN_STYLE =
  {
    fontSize,
    lineHeight: box._0625,
    height: box._15,
    // paddingTop: box._0125,
    // paddingRight: PADDING_RIGHT,
    // paddingLeft: PADDING_LEFT,
    ...box.rt.m,
    ...box.rb.m,

    ...SHARED,
  };
export const INPUTS_NUMBER_DROPDOWN_STYLE_SM =
  {
    ...INPUTS_NUMBER_DROPDOWN_STYLE,
    paddingTop: 0,
    height: box._,
  };
export const INPUTS_NUMBER_BOX_STYLE = {
  // lineHeight: box._0625,
  ...box.r.m,
  ...SHARED,
};
