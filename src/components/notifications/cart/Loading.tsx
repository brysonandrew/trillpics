import styled from "@emotion/styled";
import {
  TDivMotionProps,
  TClassValueProps,
} from "@brysonandrew/config-types";

import clsx from "clsx";
import { motion } from "framer-motion";
import { FC } from "react";
import { boxRadius } from "~/constants/box/style/radius";

const Root = styled(motion.div)``;

type TProps = TClassValueProps &
  TDivMotionProps & {
    sizeClassValue?: string;
    borderSizeClassValue?: string;
  };
export const Loading: FC<TProps> = ({
  sizeClassValue = "icon-size border-2",
  borderSizeClassValue = "border-t-gray-1",
  classValue,
  children,
  style,
  ...props
}) => {
  const borderRadius = boxRadius();
  return (
    <Root
      className={clsx(
        "relative border-gray shrink-0",
        classValue,
        sizeClassValue,
        borderSizeClassValue
      )}
      style={{ borderRadius, ...style }}
      initial={{ rotate: 0 }}
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
      {...props}
    />
  );
};
