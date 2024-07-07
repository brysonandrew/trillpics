import { boxMx } from "~/utils/box/mx";
import { boxMy } from "~/utils/box/my";

export const boxM = (m: number) => {
  return {
    ...boxMx(m),
    ...boxMy(m),
  };
};
