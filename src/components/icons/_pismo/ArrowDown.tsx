import type { FC } from "react";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";



type TProps = {
  classValue?: ClassValue;
};
export const ArrowDown: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z" />
  </svg>
);
