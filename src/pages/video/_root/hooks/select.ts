import { useClickGrid } from "~/shell/ready/context/hooks/click";
import { usePicSelected } from "~/hooks/pic/selected";
import { useTrillPicsStore } from "~/store/middleware";
import { useVideo_RootTutorial } from "~/pages/video/_root/hooks/tutorial";

export const useVideoSelect = () => {
  const { hoverKeys } =
    useTrillPicsStore(
      ({ hoverKeys }) => ({
        hoverKeys,
      })
    );
  const props = usePicSelected();
  const { isRunning, onEnd } =
    useVideo_RootTutorial(props);
  const handle = () => {
    props.toggle();
    if (isRunning) {
      onEnd();
    }
  };
  useClickGrid(
    handle,
    hoverKeys.length > 0
  );
  return { isRunning, onEnd, ...props };
};

export type TUseVideoSelect =
  ReturnType<typeof useVideoSelect>;
