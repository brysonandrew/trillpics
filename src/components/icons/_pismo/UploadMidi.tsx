import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC, SVGAttributes } from "react";

const Root = styled(motion.svg)``;

type TProps = SVGAttributes<SVGElement> & {
  classValue?: ClassValue;
};
export const UploadMidi: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
    <path d="M20.15 8.26H22V15.74H20.15M13 8.26H18.43C19 8.26 19.3 8.74 19.3 9.3V14.81C19.3 15.5 19 15.74 18.38 15.74H13V11H14.87V13.91H17.5V9.95H13M10.32 8.26H12.14V15.74H10.32M2 8.26H8.55C9.1 8.26 9.41 8.74 9.41 9.3V15.74H7.59V10.15H6.5V15.74H4.87V10.15H3.83V15.74H2Z" />
  </Root>
);
