type TConfig = {
  min: number;
  max: number;
};
export const clampNumbers = ({min, max}: TConfig) => {
  return Math.min(Math.max(min, 0), max);
};
