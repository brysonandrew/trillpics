import { useEffect } from "react";
import { animate } from "framer-motion";
import { TMain } from "~/context/types";

type TConfig = {
  toY: number;
  main: TMain;
};
export const useDraggerReset = ({
  toY,
  main,
}: TConfig) => {
  useEffect(() => {
    if (
      main.dragger.animateY !== null
    ) {
      main.dragger.animateY.stop();
    }
    main.dragger.animateY =
      animate<number>(
        main.dragger.y,
        toY,
        {
          ease: "easeIn",
          duration: 0.4,
        }
      );
  }, [toY]);
};
export type TUseUseDraggerResetResult =
  ReturnType<typeof useDraggerReset>;
