import { useClickGrid } from "~/shell/ready/context/hooks/click";
import { usePicSelected } from "~/hooks/pic/selected";

export const useVideoClickSelect =
  () => {
    const props = usePicSelected();
    const handle = () => {
      props.toggle();
    };
    useClickGrid(handle,false);
    return props; 
  };
