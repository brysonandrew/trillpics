import { BOX } from "~/constants/box";
import {
  boxRadius,
  TBoxRadiusKey,
} from "~/constants/box/radius";

type TConfig = {
  layer: "flat" | "floating";
  borderRadius?: TBoxRadiusKey;
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
