import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";



type TProps = {
  classValue?: ClassValue;
};
export const Ordered: FC<TProps> = ({ classValue }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={clsx(classValue)}
  >
    <path d="M19.5,5.5V18.5H17.5V5.5H19.5M12.5,10.5V18.5H10.5V10.5H12.5M5.5,15.5V18.5H3.5V15.5H5.5M21,4H16V20H21V4M14,9H9V20H14V9M7,14H2V20H7V14Z" />
  </svg>
);
