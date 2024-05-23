import { useEffect } from "react";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

type TConfig = { dependency: string };
export const useBlurEffect = (
  config: TConfig
) => {
  const handler = useBlurAnimate();
  useEffect(() => {
    handler();
  }, [config.dependency, handler]);
};
