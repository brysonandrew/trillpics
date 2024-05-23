import { useClickGrid } from "~/context/hooks/click";
import { usePicSelected } from "~/hooks/pic/selected";

export const useVideoClickSelect =
  () => {
    const props = usePicSelected();
    const handle = () => {
      props.toggle();
    };
    useClickGrid(handle);
    return props;
  };
