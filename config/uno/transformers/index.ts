import {
  SourceCodeTransformer,
  transformerVariantGroup,
} from 'unocss';

const variantGroupTransformer: SourceCodeTransformer =
  transformerVariantGroup();
export const TRANSFORMERS = [variantGroupTransformer];
