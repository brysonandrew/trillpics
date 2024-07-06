import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";



type TProps = {
  classValue?: ClassValue;
};
export const Options: FC<TProps> = ({ classValue }) => (
  <svg
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
  </svg>
);
