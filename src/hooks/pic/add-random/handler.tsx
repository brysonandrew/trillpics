import { resolvePicRandoms } from "~/hooks/pic/randoms";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicSelectedWrite } from "~/hooks/pic/selected/write";

export const useAddRandomHandler =
  () => {
    const { pics } = useTrillPicsStore(
      ({ pics }) => ({
        pics,
      })
    );
    const select =
      usePicSelectedWrite();
    const handleClick = () => {
      const randoms = resolvePicRandoms(
        {
          pics,
        }
      );
      select(randoms);
    };

    return handleClick;
  };
