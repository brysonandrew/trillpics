import { animate } from "framer-motion";
import { TBlur } from "~/shell/init/context/blur";
import { useContextReady } from "~/shell/ready/context";
import { isNull } from "~/utils/validation/is/null";

export const useBlurAnimate = (
  variant: keyof TBlur["control"] = "x",
  value = 16
) => {
  const { main } = useContextReady();
  const handler = () => {
    if (
      !isNull(
        main.blur.control[variant]
      )
    ) {
      main.blur.control[
        variant
      ]?.cancel();
    }
    const prev =
      main.blur.value[variant].get();
    main.blur.control[variant] =
      animate(
        main.blur.value[variant],
        value,
        {
          type: "tween",
          ease: "easeOut",
          onComplete: () =>
            main.blur.value[
              variant
            ].set(prev),
        }
      );
  };
  return handler;
};
