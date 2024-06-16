export const resolvePlayVolume = (
  stepIndex: number
) => {
  return stepIndex % 4 === 0
    ? 1.4
    : stepIndex % 2 === 0
    ? 1.2
    : 0.8;
};
