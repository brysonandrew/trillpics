import type { FC } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

type TProps = { isChecked: boolean };
export const Tick: FC<TProps> = ({ isChecked }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(
    pathLength,
    [0.05, 0.15],
    [0, 1]
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 25 150 90"
      fill="currentColor"
    >
      <motion.path
        d="M38 74.707l24.647 24.646L116.5 45.5"
        fill="transparent"
        strokeWidth="15"
        stroke="currentColor"
        strokeLinecap="round"
        animate={{ pathLength: isChecked ? 1 : 0 }}
        style={{ pathLength, opacity }}
      />
    </svg>
  );
};
