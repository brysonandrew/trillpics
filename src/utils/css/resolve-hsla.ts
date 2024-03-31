export const resolveHsla = (
  hue: number
) => `hsla(${hue}, 50%, 50%, 0.5)`;
export const resolveHue = ({
  index,
  frame,
  picCount,
}: {
  index: number;
  frame: number;
  picCount: number;
}) => {
  const progress =
  index / picCount;
  const hue =
    (Math.round(progress * 360) % 360) +
    frame / picCount;
  return hue;
};
