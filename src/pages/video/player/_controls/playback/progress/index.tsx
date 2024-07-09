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
        (v) => (1 - v) * 0.4 + 0.6
      );

      return (
        <motion.div
          style={{
            scaleX: progress,

            borderRadius,
            originX: 0,
            originY: "50%",
            opacity,
          }}
          className={clsx(
            "fill _bi-radial pointer-events-none"
            // classValue ?? "inset-1"
          )}
        >
          <motion.div
            style={{
              borderRadius,
            }}
            className="absolute -inset-1 _bi-radial-inverted blur-lg"
          />
        </motion.div>
      );
    }
  );
