import { useContextGrid } from "~/context";
import { useClickGrid } from "~/context/hooks/click";
import { ZOOM_PARAM_KEY } from "~/hooks/pic/constants";
import { usePicSelected } from "~/hooks/pic/selected";

export const useHomeClickSelect =
  () => {
    const { ref } = useContextGrid();
    const props = usePicSelected(
      ZOOM_PARAM_KEY
    );
    const handleClick = () => {
      if (props.isSelectedPics) {
        ref.current?.enableScroll();
        props.deselect();
        return;
      }

      if (props.currName) {
        ref.current?.disableScroll();
        props.select();
      }
    };
    const isDisabled = Boolean(
      props.isSelectedPics || props.isRemoving
    );
    useClickGrid(handleClick,isDisabled);
    return { ...props,onClick:handleClick,isDisabled };
  };
