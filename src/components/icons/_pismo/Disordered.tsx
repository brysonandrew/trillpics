import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};
export const Disordered: FC<TProps> = ({ classValue }) => (
  <Root
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={clsx(classValue)}
  >
    <path d="M15,21H9V3H15V21M11,19H13V5H11V19M8,21H2V11H8V21M4,19H6V13H4V19M22,21H16V8H22V21M18,19H20V10H18V19Z" />
  </Root>
);
