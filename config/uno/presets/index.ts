import { presetWebFonts, type Preset } from 'unocss';
import { withDarkModePreset } from '@brysonandrew/uno-presets';
import { FONTS } from './fonts';
import { resolveFonts } from '@brysonandrew/uno-presets/resolveFonts';

const fonts = (resolveFonts as any)(FONTS);

export type TPresets<T extends object> = (
  | Preset<T>
  | Preset<T>[]
)[];
export const resolvePresets = <
  T extends object,
>(): TPresets<T> =>
  withDarkModePreset([presetWebFonts({ fonts })]);
 