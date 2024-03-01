import styled from '@emotion/styled';
import { TAnchorMotionProps,TClassValueProps, TTitleProps } from '@brysonandrew/config-types';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

const Root = styled(motion.a)``;

type TProps = TAnchorMotionProps &
  TClassValueProps &
  TTitleProps;
export const CBA: FC<TProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <Root
      className='circle-interactive'
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
