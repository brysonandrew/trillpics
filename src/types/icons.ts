import { IconProps } from '@iconify/react';

import type { FC, SVGProps } from 'react';
import type { SVGMotionProps } from 'framer-motion';
import { TClassValueProps } from '@brysonandrew/config-types';

export type TIconConfig = IconProps
export type TIconConfigProps = {
  iconConfig: TIconConfig;
};

export type TBaseIconProps = SVGProps<SVGSVGElement> &
  TClassValueProps;

export type TBaseIconMotionProps =
  SVGMotionProps<SVGSVGElement> & TClassValueProps;

export type TIconComponent = FC<TBaseIconProps>;
