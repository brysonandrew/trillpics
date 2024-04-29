import { useEffect } from "react";
import { animate } from "framer-motion";
import { useVirtualizeScroll } from "~/shell/pics/virtualize/use-scroll";

type TConfig = { dependency: string };
export const useBlurXEffect = (
  config: TConfig
) => {
  const { blurX, blurXRef } =
    useVirtualizeScroll();
  useEffect(() => {
    blurXRef.current = animate(
      blurX,
      60,
      {
        duration: 0.4,
        type: "tween",
        onComplete: () => blurX.set(0),
      }
    );
  }, [config.dependency]);
};
