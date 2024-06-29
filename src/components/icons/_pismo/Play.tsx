import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};
export const Play: FC<TProps> = ({ classValue }) => (
  <Root
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="currentColor"
    className={clsx(classValue)}
  >
    <motion.path
      d="M8,5.14V19.14L19,12.14L8,5.14Z"
    />
  </Root>
);
