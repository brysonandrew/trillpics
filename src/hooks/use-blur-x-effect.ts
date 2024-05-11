import { useEffect } from "react";
import { animate } from "framer-motion";
import { useContextGrid } from "~/context";

type TConfig = { dependency: string };
export const useBlurXEffect = (
  config: TConfig
) => {
  const { main } =
    useContextGrid();
  useEffect(() => {
    main.blur.control.x = animate(
      main.blur.value.x,
      60,
      {
        duration: 0.4,
        type: "tween",
        onComplete: () =>
          main.blur.value.x.set(0),
      }
    );
  }, [config.dependency]);
};
