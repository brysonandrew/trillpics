import { THUMB_SIZE } from '../config';
import {
  resolveInputThumbCss,
  resolveInputTrackCss,
} from './resolveInputCss';
import { css } from '@emotion/react';
import { resolveVarCss } from '@brysonandrew/color-base';

const cssVar = resolveVarCss;

export const PRIMARY = cssVar(
  'highlight',
);
export const SECONDARY = cssVar(
  'transparent',
);
export const SHADOW = cssVar('shadow');
export const WHITE = cssVar('white');
export const BLACK = cssVar('black');
export const BLACK_2 =
  cssVar('black-2');

const INPUT_CSS_CONFIG = {
  primary: PRIMARY,
  secondary: BLACK_2,
  shadow: SHADOW,
  thumbSize: THUMB_SIZE,
} as const;

export const inputCss = css`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  appearance: none;
  width: 100%; /* Specific width is required for Firefox. */
  background-color: transparent; /* Otherwise white in Chrome */
  height: ${THUMB_SIZE}px;
  width: 100%;
`;

export const inputTrackCss =
  resolveInputTrackCss(
    INPUT_CSS_CONFIG,
  );

export const inputTwinTrackCss =
  resolveInputTrackCss({
    ...INPUT_CSS_CONFIG,
    secondary: SECONDARY,
  });

export const inputThumbCss =
  resolveInputThumbCss(
    INPUT_CSS_CONFIG,
  );

export const inputSliderCss = css`
  ${inputCss} ${inputTrackCss} ${inputThumbCss}
`;

export const inputTwinSliderCss = css`
  ${inputCss} ${inputTwinTrackCss} ${inputThumbCss}
`;
