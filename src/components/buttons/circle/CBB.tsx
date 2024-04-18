import clsx from 'clsx';
import styled from '@emotion/styled';
import { TButtonMotionProps,TClassValueProps, TTitleProps } from '@brysonandrew/config-types';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { resolveInteractiveLabels } from '@/utils/attributes/resolveInteractiveLabels';

const Root = styled(motion.button)``;

type TProps = TButtonMotionProps &
  TClassValueProps &
  TTitleProps;
export const CBB: FC<TProps> = ({
  classValue,
  children,
  title,
  ...props
}) => {
  return (
    <Root
      className={clsx('circle-interactive', classValue)}
      {...resolveInteractiveLabels(title)}
      {...props}
    >
      <>{children}</>
    </Root>
  );
};
