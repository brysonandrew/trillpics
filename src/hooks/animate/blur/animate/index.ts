import { animate } from "framer-motion";
import { useContextReady } from "~/shell/ready/context";
import { isValue } from "~/utils/validation/is/value";

export const useBlurAnimate = (axis:'x'|'y' ='x') => {
  const { main } = useContextReady();
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
