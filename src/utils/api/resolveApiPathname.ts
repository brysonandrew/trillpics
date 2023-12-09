import { TApiPathname } from '@t/api';
import { isForwardSlashStart } from '.';

export const resolveApiPathname = (key: string): TApiPathname => {
  if (!isForwardSlashStart(key)) {
    key = `/${key}`;
  }
  return key as TApiPathname;
};
