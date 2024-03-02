import { FLEX } from '@brysonandrew/uno-shortcuts';
import { CSSProperties } from 'react';

export type TMixblendModeKey = Pick<
  CSSProperties,
  'mixBlendMode'
>['mixBlendMode'];

export type TFlexShortcut =
  keyof typeof FLEX;
