import {TTruthy} from '~/types/validation';
import { isFalsy } from '~/utils/validation/is/falsy';

export const isTruthy = (value?: unknown): value is TTruthy<typeof value> =>
  !isFalsy(value);
