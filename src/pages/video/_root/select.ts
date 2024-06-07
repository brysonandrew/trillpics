import { useClickGrid } from "~/shell/ready/context/hooks/click";
import { usePicSelected } from "~/hooks/pic/selected";
import { useTrillPicsStore } from "~/store/middleware";

export const useVideoClickSelect =
  () => {
    const {
      hoverKeys,
      isHover,
      hover,
      unhover,
      cooldownEnd,
    } = useTrillPicsStore(
      ({
        hoverKeys,
        isHover,
        hover,
        unhover,
        cooldownEnd,
      }) => ({
        hoverKeys,
        isHover,
        hover,
        unhover,
        cooldownEnd,
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

export type TUseVideoClickSelect =
  ReturnType<
    typeof useVideoClickSelect
  >;
