import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC } from "react";

type TProps = {
  classValue?: ClassValue;
};
export const Plus: FC<TProps> = ({ classValue }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
  >
    <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
  </svg>
);
