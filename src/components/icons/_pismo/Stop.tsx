import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};
export const Stop: FC<TProps> = ({ classValue }) => (
  <Root
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={clsx(classValue)}
  >
    <path d="M18,18H6V6H18V18Z" />
  </Root>
);
