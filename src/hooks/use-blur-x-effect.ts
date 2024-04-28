import { useEffect } from "react";
import { animate } from "framer-motion";
import { useScroll } from "~/context/scroll";

type TConfig = { dependency: string };
export const useBlurXEffect = (
  config: TConfig
) => {
  const { blurX, blurXRef } =
    useScroll();
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
