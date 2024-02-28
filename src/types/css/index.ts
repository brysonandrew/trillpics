import { COLOR_VARIABLES_LOOKUP } from '@app/colors/index';
import { CSSProperties } from 'react';
import { FLEX } from '@uno/shortcuts/flex';

// export type TColorKey =
//   keyof typeof COLOR_VARIABLES_LOOKUP;

export type TMixblendModeKey = Pick<
  CSSProperties,
  'mixBlendMode'
>['mixBlendMode'];

export type TFlexShortcut = keyof typeof FLEX;
