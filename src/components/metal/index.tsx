import type { FC } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import clsx from "clsx";
import { TDivMotionProps } from "@brysonandrew/config-types";
import { metalRadialDarkCss } from "~/css/metal";
import { useApp } from "@brysonandrew/app";

const DefaultRoot = styled(motion.div)`
  ${metalRadialDarkCss}
`;

export type TRootProps =
  TDivMotionProps;
type TProps = TRootProps & {
  Root?: FC<TRootProps>;
};
export const Metal: FC<TProps> = ({
  Root = DefaultRoot,
  classValue,
  style,
  ...props
}) => {
  const { BORDER_RADIUS } = useApp();
  return (
    <Root
      className={clsx(
        `absolute inset-1`,
        classValue
      )}
      style={{
        borderRadius: BORDER_RADIUS.XL,
        ...style,
      }}
      {...props}
    />
  );
};
