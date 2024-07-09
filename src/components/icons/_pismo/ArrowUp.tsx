import type { FC } from "react";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";



type TProps = {
  classValue?: ClassValue;
};
export const ArrowUp: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" />{" "}
  </svg>
);
