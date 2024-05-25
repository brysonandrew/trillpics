import { useClickGrid } from "~/context/hooks/click";
import { ZOOM_PARAM_KEY } from "~/hooks/pic/constants";
import { usePicSelected } from "~/hooks/pic/selected";

export const useHomeClickSelect =
  () => {
    const props = usePicSelected(
      ZOOM_PARAM_KEY
    );
    const handleClick = () => {
      if (props.isSelectedPics) {
        props.deselect();
        return;
      }

      props.select();
    };
    useClickGrid(handleClick);
    return {onClick:handleClick, ...props};
  };
