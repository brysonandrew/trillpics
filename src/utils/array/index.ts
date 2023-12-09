export const toggleArrayValue = <T>(
  value: T,
  isShown: boolean,
): [typeof value] | [] => (isShown ? [value] : []);
