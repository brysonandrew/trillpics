import { animate } from "framer-motion";
import { useReadyContext } from "~/shell/ready/context";
import { isValue } from "~/utils/validation/is/value";

export const useBlurInertia = (
  axis: "x" | "y" = "x",
  source: number
) => {
  const { main } = useReadyContext();
  const handler = () => {
    if (
      isValue(main.blur.control[axis])
    ) {
      main.blur.control[axis]?.cancel();
    }
    main.blur.control[axis] = animate(
      main.blur.value[axis],
      source * 0.008,
      {
        type: "inertia",
        restDelta: 0,
        restSpeed: 1,
        velocity: source * 0.02,
        onComplete: () => {
          main.blur.value.y.set(0);
        },
      }
    );
  };
  return handler;
};
