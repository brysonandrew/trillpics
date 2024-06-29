import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC, SVGAttributes } from "react";

const Root = styled(motion.svg)``;

type TProps = SVGAttributes<SVGElement> & {
  classValue?: ClassValue;
};
export const Warning: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx(classValue)}
    width="18"
    height="18"
    viewBox="0 0 19 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5 0 19 19H0L9.5 0zm0 3.87L2.819 17.24H16.18L9.5 3.87zm-.86 11.611v-1.759h1.72v1.76H8.64zm0-7.74h1.72v2.11l-.344 2.816H8.984l-.345-2.815V7.74z" />
  </Root>
);
