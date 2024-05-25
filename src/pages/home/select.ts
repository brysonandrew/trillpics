import { useContextGrid } from "~/context";
import { useClickGrid } from "~/context/hooks/click";
import { ZOOM_PARAM_KEY } from "~/hooks/pic/constants";
import { usePicSelected } from "~/hooks/pic/selected";

export const useHomeClickSelect =
  () => {
    const {ref} = useContextGrid()
    const props = usePicSelected(
      ZOOM_PARAM_KEY
    );
    const handleClick = () => {
      if (props.isSelectedPics) {
        console.log("DESELCT")
        ref.current?.enableScroll()

        props.deselect();
        return;
      }

      ref.current?.disableScroll()
      props.select();
    };
    useClickGrid(handleClick);
    return {onClick:handleClick, ...props};
  };
