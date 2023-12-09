import { COLOR_VARIABLES_LOOKUP } from '..';
import { TColorRgbKey } from '../types';

export const resolveColor = (
  color: Extract<TColorRgbKey, string>,
  opacity: number,
) =>
  `rgba(${COLOR_VARIABLES_LOOKUP[color]}, ${opacity})`;
