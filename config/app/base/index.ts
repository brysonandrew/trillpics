import { FONTS } from '~/app/base/fonts';
import { APP_PACKAGE_PROPS } from '~/app/base/package';

export const APP_BASE_PROPS = {
  ...APP_PACKAGE_PROPS,
  FONTS,
} as const;

export * from './fonts';
export * from './package';
