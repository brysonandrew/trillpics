import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";



type TProps = {
  classValue?: ClassValue;
};
export const Plus: FC<TProps> = ({ classValue }) => (
    <svg
      className={clsx(classValue)}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );
