import { useEffect } from "react";
import { animate } from "framer-motion";
import { boxSize } from "~/constants/box/size";
import { useContextGrid } from "~/context";

type TConfig = {
  containerHeight: number;
};
export const useDraggerReset = ({
  containerHeight,
}: TConfig) => {
  const { dragger } = useContextGrid();
  useEffect(() => {
    if (!containerHeight) return;
    animate<number>(
      dragger.y,0,
      // -containerHeight / 4,
      {
        ease: "easeIn",
        duration: 0.4,
      }
    );
  }, [containerHeight]);
};
export type TUseUseDraggerResetResult =
  ReturnType<typeof useDraggerReset>;
