import { useClickGrid } from "~/context/hooks/click";
import { usePicSelected } from "~/hooks/pic/selected";

export const useClickSelect = () => {
  const props = usePicSelected();
  const handle = () => {
    if (props.isSelectedPics) {
      props.deselect(props.names[0]);
      return;
    }
    props.select();
  };
  useClickGrid(handle);
  return props;
};
