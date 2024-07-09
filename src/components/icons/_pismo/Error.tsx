import type { FC } from "react";
import type { ClassValue } from "clsx";
import clsx from "clsx";

type TProps = {
  classValue?: ClassValue;
};

export const Error: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      d="M10 12.106c-.64 0-1.17-.523-1.17-1.167V5.728c0-.645.53-1.167 1.17-1.167.64 0 1.17.522 1.17 1.167v5.211c0 .644-.53 1.167-1.17 1.167m-1.15 2.187a1.151 1.151 0 0 1 2.3 0 1.151 1.151 0 0 1-2.3 0M10 20c5.52 0 10-4.477 10-10S15.52 0 10 0 0 4.477 0 10s4.48 10 10 10"
      fillRule="evenodd"
    />
  </svg>
);
