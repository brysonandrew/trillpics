import { useEffect } from "react";
import { animate } from "framer-motion";
import { useVirtualizeContext } from "~/pics/virtualize/context";

type TConfig = { dependency: string };
export const useBlurXEffect = (
  config: TConfig
) => {
  const { blurRef } =
    useVirtualizeContext();
  useEffect(() => {
    blurRef.current.control.x = animate(
      blurRef.current.value.x,
      60,
      {
        duration: 0.4,
        type: "tween",
        onComplete: () => blurRef.current.value.x.set(0),
      }
    );
  }, [config.dependency]);
};
