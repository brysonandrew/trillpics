import { useReadyContext } from "~/shell/ready/context";
import { useClickGrid } from "~/shell/ready/context/hooks/click";
import {
  QUERY_PARAM_KEYS,
  ZOOM_PARAM_KEY,
} from "~/hooks/pic/constants";
import { usePicSelected } from "~/hooks/pic/selected";
import { useTrillPicsStore } from "~/store/middleware";

export const useHomeClickSelect =
  () => {
    const {
      hoverKeys,
    } = useTrillPicsStore(
      ({
        hoverKeys,
      }) => ({
        hoverKeys,
      })
    );
    const { ref } = useReadyContext();
    const props = usePicSelected(
      QUERY_PARAM_KEYS[ZOOM_PARAM_KEY]
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
      props.isSelectedPics ||
        props.isRemoving ||
        hoverKeys.length > 0
    );
    useClickGrid(
      handleClick,
      isDisabled
    );
    return {
      ...props,
      onClick: handleClick,
      isDisabled,
    };
  };
