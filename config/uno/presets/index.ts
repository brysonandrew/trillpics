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
        name: 'Excon', //Switzer Author Tanker
        provider: 'fontshare',
      },
      comico: {
        name: 'Comico',
        provider: 'fontshare',
      },
    },
  }),
];
