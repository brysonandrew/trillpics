import { TDimensions } from "@ops/types/media";

type TConfig = number;
export const resolveDimensions = (
  size: TConfig
):TDimensions => {
  return {
    width: size,
    height: size,
  };
};
