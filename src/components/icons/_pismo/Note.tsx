import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";



type TProps = {
  classValue?: ClassValue;
};
export const Note = ({ classValue }: TProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
  </svg>
);
