import {
  TRgbRecord,
  resolveRgbRecord,
  resolveColorOpacityVariations,
  resolveColorSeries,
} from '../utils';
import { resolveGrayscaleRange } from './resolveGrayscale';

export const GRAY_RGBS =
  resolveGrayscaleRange(85, 170);

export const GRAY_RGB_RECORD: TRgbRecord<'gray'> =
  resolveRgbRecord(GRAY_RGBS, 'gray');

export const GRAY = {
  ...resolveColorOpacityVariations(
    'gray',
    GRAY_RGBS[5],
  ),
  ...resolveColorSeries(
    'gray',
    GRAY_RGBS,
  ),
};
