export type TError = any;

export type TApiPathname = `/${string}`;
export type TApiPathnameWithSearch =
  `${TApiPathname}?${string}`;
export type TApiPath =
  | TApiPathname
  | TApiPathnameWithSearch;
export type TApiUrl =
  | TApiPath
  | `${string}${TApiPath}`;
