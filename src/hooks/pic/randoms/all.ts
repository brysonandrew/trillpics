import { useMemo } from "react";
import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { TPicRandomsConfig } from "~/hooks/pic/randoms/types";

type TConfig = TPicRandomsConfig;
export const usePicRandoms = (
  config: TConfig
) => {
  const randoms = useMemo(() => {
    return resolvePicRandoms(config);
  }, []);
  return randoms;
};
