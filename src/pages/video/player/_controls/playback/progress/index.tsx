import { FC, memo } from "react";
import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import {
  boxRadius,
  TBoxRadiusKey,
} from "~uno/rules/box/radius";
import clsx from "clsx";
import { TClassValueProps } from "@brysonandrew/config-types";

type TProps = TClassValueProps & {
  progress: MotionValue<number>;
  borderRadiusSize?: TBoxRadiusKey;
};
export const TimerCurrentProgress: FC<TProps> =
  memo(
    ({
      progress,
      classValue,
      borderRadiusSize = "xl",
    }) => {
      const opacity = useTransform(
        progress,
        (v) => (1 - v) / 12 + 0.2
      );
      const borderRadius = boxRadius(
        borderRadiusSize
      );

      return (
        <motion.div
          style={{
            scaleX: progress,
            borderRadius,
            originX: 0,
            originY: "50%",
          }}
          className={clsx(
            "absolute w-full _gradient-radial pointer-events-none",
            classValue ?? "inset-1"
          )}
        >
          <motion.div
            style={{
              borderRadius,
              opacity,
            }}
            className="absolute -inset-4 _gradient-radial-inverted blur-lg"
          />
        </motion.div>
      );
    }
  );
