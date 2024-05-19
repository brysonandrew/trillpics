import { animate } from "framer-motion";
import { useContextGrid } from "~/context";
import { isValue } from "~/utils/validation/is/value";

export const useBlurXAnimate = (axis:'x'|'y' ='x') => {
  const { main } = useContextGrid();
  const handler = () => {
    if (isValue(main.blur.control[axis])) {
      main.blur.control[axis]?.cancel();
    }
    const prev =
      main.blur.value[axis].get();
    main.blur.control[axis] = animate(
      main.blur.value[axis],
      100,
      {
        type: "tween",
        onComplete: () =>
          main.blur.value[axis].set(prev),
      }
    );
  };
  return handler;
};
