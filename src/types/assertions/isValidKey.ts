export const isValidKey = <
  K extends string,
  T extends Record<K, any> = Record<
    K,
    any
  >,
>(
  key: string,
  payload: T,
): key is Extract<keyof T, string> => {
  return key in payload;
};
