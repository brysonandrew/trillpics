import packageJson from '~root/package.json';
import { kebabToTitle } from '@brysonandrew/utils-format';
import { TAppPackageProps } from '@brysonandrew/app';

export const APP_TITLE = kebabToTitle(packageJson.name);
export const APP_DESCRIPTION = packageJson.description;
export const APP_VERSION = packageJson.version;

export const APP_PACKAGE_PROPS: TAppPackageProps = {
  APP_TITLE,
  APP_DESCRIPTION,
  APP_VERSION,
};
