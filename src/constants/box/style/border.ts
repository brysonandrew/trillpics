import { BOX } from "~/constants/box";

type TConfig = {
  layer: "flat" | "floating";
  borderRadius?: "borderRadius";
};
export const boxBorder = ({
  layer,
  borderRadius,
}: TConfig) => {
  const box = BOX;
  return {
    ...box[layer],
    ...(borderRadius
      ? {
          [borderRadius]:
            box[borderRadius],
        }
      : {}),
  };
};
export type TBoxBorder = ReturnType<
  typeof boxBorder
>;
