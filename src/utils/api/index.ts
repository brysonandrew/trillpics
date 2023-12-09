import { TPath } from '@t/data';
import { resolveApiBase } from './resolveApiBase';
import {
  TApiPath,
  TApiPathname,
  TApiUrl,
} from '@t/api';

export const prependBase = (
  search: TApiPath,
): TApiUrl => {
  const base = resolveApiBase();
  return `${base}${search}`;
};

export const isForwardSlashStart = (
  value: string,
) => value[0] === '/';

export const isPath =
  isForwardSlashStart;

export function validatePath(
  search: unknown,
): asserts search is TPath {
  if (typeof search !== 'string')
    throw new Error(
      "search isn't a string",
    );
  if (!isPath(search))
    throw new Error(
      'search doesn\'t start with "/"',
    );
}

export const isApiPathname = (
  value: string,
) => isForwardSlashStart(value);

export function validateApiPathname(
  search: unknown,
): asserts search is TApiPathname {
  validatePath(search);
}
