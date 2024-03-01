import { Rule } from 'unocss';
import { TNeuBoxConfig } from '../neu/types';
import { resolveNeuClasses } from '../neu/resolveNeuClasses';

const config: TNeuBoxConfig = {
  size: 1,
  blur: 3,
  hue: 0,
  saturation: 0,
  lightness: 12,
};
const style = resolveNeuClasses(config);

export const NEU: Rule[] =
  Object.entries(style);
