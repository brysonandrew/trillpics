import { useEffect } from "react";
import { animate } from "framer-motion";
import { useInitContext } from "~/shell/init/context";

type TConfig = {
  to: number;from:number
};
export const useDraggerReset = ({
  to,from
}: TConfig) => {
  const { main } = useInitContext();
  useEffect(() => {
    if (
      main.dragger.animateY !== null
    ) {
      main.dragger.animateY.stop();
    }
    main.dragger.animateY =
      animate<number>(
        main.dragger.y,
        to,
        {
          ease: "easeIn",
          duration: 0.4,
        }
      );
    return () => {
      main.dragger.y.set(from);
    };
  }, [to,from]);
};
export type TUseUseDraggerResetResult =
  ReturnType<typeof useDraggerReset>;
