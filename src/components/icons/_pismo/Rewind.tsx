import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC } from "react";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};
export const Rewind: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M11.5,12L20,18V6M11,18V6L2.5,12L11,18Z" />
  </Root>
);
