import styled from '@emotion/styled';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Effect = styled(motion.div)``;

export type TFilterAnimateProps = TClassValueProps &
  TChildrenPartialProps;
export const FilterAnimate: FC<TFilterAnimateProps> = ({
  classValue,
  children,
  ...props
}) => {
  return (
    <>
      {children && (
        <>
          {children}
          <Effect
            className={clsx('absolute inset-0', classValue)}
            {...props}
          >
            {children}
          </Effect>
        </>
      )}
    </>
  );
};
