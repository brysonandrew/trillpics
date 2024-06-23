import { boxPx } from "~/utils/box/px";
import { boxPy } from "~/utils/box/py";

export const boxP = (p: number) => {
  return {
    ...boxPx(p),
    ...boxPy(p),
  };
};
