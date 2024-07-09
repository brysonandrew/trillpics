import { usePicSelectedWrite } from "~/hooks/pic/selected/write";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";
import { useAddRandomRef } from "~/hooks/pic/add-random/ref";

export const useAddRandomHandler =
  () => {
    const [randoms, randomize] =
      useAddRandomRef();
    const handleBlur = useBlurAnimate(
      "addRandom"
    );

    const select =
      usePicSelectedWrite();
    const selectRandoms = () => {
      handleBlur(10);

      randomize();
      select(randoms);
    };

    return [
      randoms,
      selectRandoms,
      randomize,
    ] as const;
  };
