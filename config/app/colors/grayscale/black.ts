import { resolveColorOpacityVariations, resolveColorSeries, TRgbRecord, resolveRgbRecord } from "../utils";
import { resolveGrayscaleRange } from "./resolveGrayscale";

export const BLACK_RGBS =
  resolveGrayscaleRange(0, 85);

export const BLACK = {
  ...resolveColorOpacityVariations(
    'black',
    BLACK_RGBS[0],
  ),
  ...resolveColorSeries(
    'black',
    BLACK_RGBS,
  ),
};

export const BLACK_RGB_RECORD: TRgbRecord<'black'> =
  resolveRgbRecord<'black'>(
    BLACK_RGBS,
    'black',
  );
