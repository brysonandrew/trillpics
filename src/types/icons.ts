import { IconProps } from '@iconify/react';
import { TClassValueProps } from '.';

export type TIconConfig = IconProps &
  TClassValueProps;
export type TIconConfigProps = {
  iconConfig: TIconConfig;
};
