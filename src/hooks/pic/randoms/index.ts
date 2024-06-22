import { TPicRandomsConfig } from "~/hooks/pic/randoms/types";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { TPics } from "~/store/state/pics/types";

const resolveRandomPic = (
  pics: TPics
) =>
  `${Math.floor(
    (pics.length - 1) * Math.random() +
      1
  )}`;
export const resolvePicRandoms = ({
  pics,
  count = MAX_COUNT,
}: TPicRandomsConfig) => {
  const randoms: TPics = [];
  while (randoms.length < count) {
    const next = resolveRandomPic(pics);
    if (!randoms.includes(next)) {
      randoms.push(next);
    }
  }

  return randoms;
};
