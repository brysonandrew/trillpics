import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { FC, SVGAttributes } from "react";

const Root = styled(motion.svg)``;

type TProps = SVGAttributes<SVGElement> & {
  classValue?: ClassValue;
};
export const Webcam: FC<TProps> = ({ classValue }) => (
    <Root
      className={clsx(classValue)}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
    </Root>
  );
