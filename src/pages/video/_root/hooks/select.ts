import { useClickGrid } from "~/shell/ready/context/hooks/click";
import { usePicSelected } from "~/hooks/pic/selected";
import { useTrillPicsStore } from "~/store/middleware";

export const useVideoSelect = () => {
  const { hoverKeys } =
    useTrillPicsStore(
      ({ hoverKeys }) => ({
        hoverKeys,
      })
    );
  const props = usePicSelected();
  const handle = () => {
    props.toggle();
  };
  useClickGrid(
    handle,
    hoverKeys.length > 0
  );
  return props;
};

export type TUseVideoSelect =
  ReturnType<typeof useVideoSelect>;
