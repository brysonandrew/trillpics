
const BORDER_RADIUS = {
  s: 2,
  m: 4,
  l: 8,
  xl: 40,
} as const;

export type TBoxRadiusKey =
  keyof typeof BORDER_RADIUS;
export const boxRadius = (
  key: TBoxRadiusKey = "xl"
) => {
  return BORDER_RADIUS[key];
};

export {BORDER_RADIUS}
type TConfig = {
  borderRadius?: TBoxRadiusKey;
};
export const boxBorder = ({
  borderRadius,
}: TConfig) => {
  return {
    ...(borderRadius
      ? {
          borderRadius: boxRadius(
            borderRadius
          ),
        }
      : {}),
  };
};
export type TBoxBorder = ReturnType<
  typeof boxBorder
>;
