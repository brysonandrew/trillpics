import type { ClassValue } from "clsx";
import clsx from "clsx";
import type { FC } from "react";

type TProps = {
  classValue?: ClassValue;
};
export const Copy: FC<TProps> = ({ classValue }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M19,21H8V7H19M19,5H8C6.9,5 6,5.9 6,7V21C6,22.1 6.9,23 8,23H19C20.1,23 21,22.1 21,21V7C21,5.9 20.1,5 19,5M16,1H4C2.9,1 2,1.9 2,3V17H4V3H16V1Z" />
  </svg>
);
