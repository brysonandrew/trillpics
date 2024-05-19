import { useEffect } from "react";
import { useBlurXAnimate } from "~/hooks/blur/animate";

type TConfig = { dependency: string };
export const useBlurXEffect = (
  config: TConfig
) => {
  const handler = useBlurXAnimate();
  useEffect(() => {
    handler();
  }, [config.dependency, handler]);
};
