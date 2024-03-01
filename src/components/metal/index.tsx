import styled from '@emotion/styled';
import clsx from 'clsx';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { TDivMotionProps } from '@brysonandrew/config-types';
import { metalRadialDarkCss } from '@css/metal';

const DefaultRoot = styled(motion.div)`
  background-color: var(--white-6);
  html.dark & {
    ${metalRadialDarkCss}
  }
`;

export type TRootProps =
  TDivMotionProps;
type TProps = TRootProps & {
  Root?: FC<TRootProps>;
};
export const Metal: FC<TProps> = ({
  Root = DefaultRoot,
  classValue,
  ...props
}) => (
  <Root
    className={clsx(
      `absolute inset-0`,
      classValue,
    )}
    {...props}
  />
);
