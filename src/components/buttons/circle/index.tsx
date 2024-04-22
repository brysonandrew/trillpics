import styled from "@emotion/styled";
import {
  TChildrenProps,
  TDivMotionProps,
} from "@brysonandrew/config-types";
import clsx from "clsx";
import { motion } from "framer-motion";
import { FC } from "react";
import { MetalMotion } from "@brysonandrew/texture-metal";
import { TInteractiveShape } from "~/types/css/interactive";

const Root = styled(motion.div)``;

type TPosition =
  | "relative"
  | "absolute";

type TProps = TDivMotionProps &
  TChildrenProps & {
    isHover?: boolean;
    position?: TPosition;
    shape?: TInteractiveShape;
  };
export const CB: FC<TProps> = ({
  position = "relative",
  isHover,
  classValue,
  children,
  shape = "interactive-circ-lg",
  ...props
}) => {
  return (
    <Root
      className={clsx(
        position,
        "center",
        shape,
        ["group"],
        classValue
      )}
      {...props}
    >
      <MetalMotion
        color="secondary"
        classValue="rounded-full"
      />
      {children}
    </Root>
  );
};
