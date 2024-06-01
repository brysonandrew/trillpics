import { animate } from "framer-motion";
import {
  TBlurVariant,
} from "~/shell/init/context/blur";
import { TMain } from "~/shell/init/context/types";
import { useContextReady } from "~/shell/ready/context";
import { isNull } from "~/utils/validation/is/null";

export const useBlurAnimate = (
  variant: TBlurVariant = "x",
  value = 16,
  __main?: TMain
) => {
  const { main: _main } =
    useContextReady();
  const main = __main ?? _main;
  const handler = (v = value) => {
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
        v,
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
