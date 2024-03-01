import { CSSProperties } from 'react';
import { FLEX } from '@uno/shortcuts/flex';

export type TMixblendModeKey = Pick<
  CSSProperties,
  'mixBlendMode'
>['mixBlendMode'];

export type TFlexShortcut =
  keyof typeof FLEX;
