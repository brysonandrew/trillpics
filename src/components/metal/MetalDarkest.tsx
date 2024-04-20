import { metalRadialDarkestCss } from '~/css/metal';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { TRootProps, Metal } from '.';

const Root = styled(motion.div)`
  background-color: var(--white-7);
  html.dark & {
    ${metalRadialDarkestCss}
  }
`;

export const MetalDarkest: FC<TRootProps> = ({
  ...props
}) => <Metal Root={Root} {...props} />;
