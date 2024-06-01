import { animate } from "framer-motion";
import { useInitContext } from "~/shell/init/context";
import { TBlurVariant } from "~/shell/init/context/blur";
import { isNull } from "~/utils/validation/is/null";

export const useBlurAnimate = (
  variant: TBlurVariant = "x"
) => {
  const { main } = useInitContext();
  const handler = (peak = 10) => {
    if (
      !isNull(
        main.blur.control[variant]
      )
    ) {
      main.blur.control[
        variant
      ]?.stop();
    }

    const curr =
      main.blur.value[variant].get();
      console.log(curr)
    main.blur.control[variant] =
      animate(
        main.blur.value[variant],
        [curr, peak, 0],
        {
          type: "tween",
          ease: "linear",
          onComplete: () =>
            main.blur.value[
              variant
            ].set(0),
        }
      );
  };
  return handler;
};
