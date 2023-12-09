import { TRgb } from '../types';
import {
  resolveColorOpacityVariations,
  resolveColorSeries,
  TRgbRecord,
  resolveRgbRecord,
} from '../utils';
import { resolveGrayscaleRange } from './resolveGrayscale';

const WHITE_RGBS: TRgb[] =
  resolveGrayscaleRange(170, 255);

export const WHITE = {
  ...resolveColorOpacityVariations(
    'white',
    WHITE_RGBS[9],
  ),
  ...resolveColorSeries(
    'white',
    WHITE_RGBS,
  ),
};

export const WHITE_RGB_RECORD: TRgbRecord<'white'> =
  resolveRgbRecord<'white'>(
    WHITE_RGBS,
    'white',
  );
