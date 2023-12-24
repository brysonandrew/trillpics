import {
  EFFECT_ANIMATE_TRANSITION,
} from '.';
import { MotionValue } from 'framer-motion';
import { TColorRgbKey } from '@app/colors/types';
import { resolveColor } from '@app/colors/utils';

export const resolveDropShadow = (
  spread: number,
  color: TColorRgbKey = 'white',
) =>
  `drop-shadow(0px 0px ${spread}px ${resolveColor(
    color,
    0.8,
  )})`;
export const resolveShadow = (
  spread: number,
  color: TColorRgbKey = 'white',
) =>
  `0px 0px ${spread}px ${resolveColor(
    'white',
    0.5,
  )}, 0px 0px ${spread}px ${resolveColor(color, 0.8)}`;

export type TGlowConfigOptions = {
  text?: number;
  drop?: number;
  color?: TColorRgbKey;
  value?: MotionValue;
};
export type TPartialGlowConfigOptions =
  Partial<TGlowConfigOptions>;
export const resolveGlowProps = ({
  text = 0,
  drop = 0,
  color = 'teal',
  value,
}: TGlowConfigOptions) => ({
  style: {
    opacity: value ?? 0,
    textShadow: resolveShadow(text, color),
    filter: resolveDropShadow(drop, color),
  },
  transition: EFFECT_ANIMATE_TRANSITION,
  variants: value
    ? {}
    : {
        animate: {
          opacity: 0,
        },
        hover: {
          opacity: 1,
        },
      },
});
