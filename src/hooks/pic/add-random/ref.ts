import { useReducer } from "react";
import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { useTrillPicsStore } from "~/store/middleware";
import { TPics } from "~/store/state/pics/types";

export const useAddRandomRef = () => {
  const { pics } = useTrillPicsStore(
    ({ pics }) => ({
      pics,
    })
  );
  const handleRandoms = () => {
    const randoms = resolvePicRandoms({
      pics,
    });
    return randoms;
  };

  const reducer = useReducer<
    (prev: TPics) => TPics,
    TPics
  >(handleRandoms, [], handleRandoms);

  return reducer;
};
