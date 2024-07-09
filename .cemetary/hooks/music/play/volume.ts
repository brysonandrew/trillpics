const f = 2;
export const resolvePlayVolume = (
  stepIndex: number
) => {
  return stepIndex % 4 === 0
    ? 1.4*f
    : stepIndex % 2 === 0
    ? 1.2*f
    : 0.2*f;
};
