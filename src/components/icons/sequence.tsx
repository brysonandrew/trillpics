import type { FC } from "react";

import type { ClassValue } from "clsx";
import { clsx } from "clsx";



type TProps = {
  classValue?: ClassValue;
};
export const Sequencing: FC<TProps> = ({ classValue }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={clsx(classValue)}
  >
    <path d="M3,15H5V19H19V15H21V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V15Z" />
  </svg>
);
