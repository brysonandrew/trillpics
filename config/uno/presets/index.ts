import { presetWebFonts, type Preset } from 'unocss';
import { withDarkModePreset } from '@brysonandrew/uno-presets';
import { FONTS } from '../../app/base/fonts';
import { resolveFonts } from '@brysonandrew/uno-presets/resolveFonts';

const fonts = resolveFonts(FONTS);

export type TPresets<T extends object> = (
  | Preset<T>
  | Preset<T>[]
)[];
export const resolvePresets = <
  T extends object,
>(): TPresets<T> =>
  withDarkModePreset([presetWebFonts({ fonts })]);
 