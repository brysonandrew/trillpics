import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC, SVGAttributes } from "react";

const Root = styled(motion.svg)``;

type TProps = SVGAttributes<SVGElement> & {
  classValue?: ClassValue;
};
export const Mute: FC<TProps> = ({ classValue }) => (
  <Root
    className={clsx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
  </Root>
);
