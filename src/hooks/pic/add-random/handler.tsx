import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicSelectedWrite } from "~/hooks/pic/selected/write";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

export const useAddRandomHandler =
  () => {
    const { pics } = useTrillPicsStore(
      ({ pics }) => ({
        pics,
      })
    );
    const handleBlur = useBlurAnimate(
      "addRandom",
    );

    const select =
      usePicSelectedWrite();
    const handleClick = () => {
      handleBlur(10);
      const randoms = resolvePicRandoms(
        {
          pics,
        }
      );
      select(randoms);
    };

    return handleClick;
  };
