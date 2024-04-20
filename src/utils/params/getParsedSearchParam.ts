import { REGEX_ILLEGAL_CHARS_G } from '~/utils/regex/patterns';

export const getParsedSearchParam = (key: string, searchParams: URLSearchParams) => {
  let value = searchParams.get(key);
  if (value) {
    value = value.replace(REGEX_ILLEGAL_CHARS_G, '');
  }
  return value;
};
