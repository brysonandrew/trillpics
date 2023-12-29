import {
  definePreset,
  presetUno,
  presetWebFonts,
  type Preset,
} from 'unocss';
import {
  TAnyTheme,
  TTheme,
} from '../theme';

export type TPresets = (
  | Preset<TTheme>
  | Preset<TTheme>[]
)[];
export const PRESETS: TPresets = [
  definePreset<TAnyTheme>(
    presetUno({ dark: 'class' }),
  ),
  presetWebFonts({
    fonts: {
      sans: {
        name: 'Author', //Switzer Author Tanker Excon
        provider: 'fontshare',
      },
      slab: {
        name: 'Hoover',
        provider: 'fontshare',
      },
      display: {
        name: 'Nippo',
        provider: 'fontshare',
      },
    },
  }),
];
