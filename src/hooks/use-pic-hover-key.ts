import { useTrillPicsStore } from "~/store";
import { THoverPicKey } from "~/store/state/hover/types";

export const useHoverPicKey = (
  picKey: THoverPicKey
) => {
  const {
    hoverPicKey,
    hoverPic,
    unhoverPic,
  } = useTrillPicsStore(
    ({
      hoverPicKey,
      hoverPic,
      unhoverPic,
    }) => ({
      hoverPicKey,
      hoverPic,
      unhoverPic,
    })
  );
  const onStart = () => {
    hoverPic(picKey);
  };
  const onStop = () => {
    unhoverPic(picKey);
  };
  const handlers = {
    onPointerEnter: onStart,
    onMouseEnter: onStart,
    onPointerOut: onStop,
    onPointerLeave: onStop,
    onMouseLeave: onStop,
  };

  return {
    hoverKey: hoverPicKey,
    handlers,
  };
};
export type THoverKeyConfig =
  ReturnType<typeof useHoverPicKey>;
export type THoverKeyHandlers =
  THoverKeyConfig["handlers"];
