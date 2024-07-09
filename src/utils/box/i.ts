import { boxIx } from "~/utils/box/ix";
import { boxIy } from "~/utils/box/iy";

export const boxI = (p: number) => {
  return {
    ...boxIx(p),
    ...boxIy(p),
  };
};
