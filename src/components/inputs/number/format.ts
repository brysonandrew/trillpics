export const inputsNumberFormat = (
  value: number|string
) => {
  return Number(Number(value).toFixed(6));
};
