import styled from "@emotion/styled";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { motion } from "framer-motion";

const Root = styled(motion.svg)``;

type TProps = {
  classValue?: ClassValue;
};

export const OffSwitch = ({ classValue }: TProps) => (
  <Root
    className={clsx("w-4 h-4", classValue)}
    width="20"
    height="20"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path
      d="M279.273,0.593v184.995c0,12.87-10.403,23.273-23.273,23.273s-23.273-10.403-23.273-23.273V0.593
			C102.26,12.369,0,121.891,0,255.407c0,141.405,114.618,256,256,256s256-114.595,256-256C512,121.891,409.74,12.369,279.273,0.593z
			"
    />
  </Root>
);
