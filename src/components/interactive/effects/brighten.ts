import {
  EFFECT_ANIMATE_TRANSITION,
  EFFECT_HOVER_TRANSITION,
} from '.';

export const resolveBrightness = (value = 100) =>
  `brightness(${value}%)`;

export type TBrightenConfigOptions = {
  brightness?: number;
};
export type TPartialBrightenConfigOptions =
  Partial<TBrightenConfigOptions>;
export const resolveBrightenProps = ({
  brightness = 120,
}: TBrightenConfigOptions) => ({
  style: {
    opacity: 0,
    filter: resolveBrightness(brightness),
  },
  variants: {
    animate: {
      opacity: 0,
      transition: EFFECT_ANIMATE_TRANSITION,
    },
    hover: {
      opacity: 1,
      transition: EFFECT_HOVER_TRANSITION,
    },
  },
});
