import { TPicRandomsConfig } from "~/hooks/pic/randoms/types";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";


export const resolvePicRandoms = ({
  pics,
  count = MAX_COUNT,
}: TPicRandomsConfig) => {
  return [...Array(count)].map(
    () =>
      `${Math.floor(
        pics.length * Math.random()
      )}`
  );
};
