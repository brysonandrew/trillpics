import { TBaseStyleKey, TStyleRecord, TParenTItemClassKey } from '@pages/form/config/types';
import { CSSProperties } from 'react';

type TConfig = {
  key: TBaseStyleKey;
  parentKey?: TParenTItemClassKey;
  styleRecord?: TStyleRecord;
};
export const resolveStyleRecord = ({
  styleRecord,
  parentKey,
  key,
}: TConfig): CSSProperties | undefined => {
  if (!styleRecord) return undefined;
  if (parentKey) {
    const parentRecord = styleRecord[parentKey];
    return parentRecord?.[key] ?? styleRecord[key];
  } else {
    return styleRecord[key];
  }
};
