import { FC, memo } from "react";
import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import clsx from "clsx";
import { TClassValueProps } from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";

type TProps = TClassValueProps & {
  progress: MotionValue<number>;
  borderRadius?: number;
};
export const TimerCurrentProgress: FC<TProps> =
  memo(
    ({
      progress,
      classValue,
      borderRadius = box.radius.xl,
    }) => {
      const opacity = useTransform(
        progress,
        (v) => (1 - v) / 12 + 0.2
      );

      return (
        <motion.div
          style={{
            borderRadius,
          }}
          className={clsx(
            "absolute w-full _gradient-radial pointer-events-none",
            classValue ?? "inset-1"
          )}
        >
          <motion.div
            style={{
              scaleX: progress,
              originX: 0,
              originY: "50%",
              borderRadius,
              opacity,
            }}
            className="absolute -inset-4 _gradient-radial-inverted blur-lg"
          />
        </motion.div>
      );
    }
  );
