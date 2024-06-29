import type { FC } from "react";
import type { SVGMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";

const Root = styled(motion.svg)``;

type TProps = SVGMotionProps<SVGSVGElement> & {
  classValue?: ClassValue;
};
export const Pan: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z" />
  </Root>
);
