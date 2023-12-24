import { IconProps } from '@iconify/react';
import { TClassValueProps } from '.';

import type { FC, SVGProps } from 'react';
import type { SVGMotionProps } from 'framer-motion';

export type TIconConfig = IconProps &
  TClassValueProps;
export type TIconConfigProps = {
  iconConfig: TIconConfig;
};

export type TBaseIconProps = SVGProps<SVGSVGElement> &
  TClassValueProps;

export type TBaseIconMotionProps =
  SVGMotionProps<SVGSVGElement> & TClassValueProps;

export type TIconComponent = FC<TBaseIconProps>;
