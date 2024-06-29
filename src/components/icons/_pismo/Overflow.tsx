import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};

export const Overflow: FC<TProps> = ({ classValue }) => (
  <Root
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={clsx(classValue)}
  >
    <path d="M7,21H5V3H7V21M14,3H12V9H14V3M14,15H12V21H14V15M19,12L16,9V11H9V13H16V15L19,12Z" />
  </Root>
);
