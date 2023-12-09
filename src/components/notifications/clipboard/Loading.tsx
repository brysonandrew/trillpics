import styled from '@emotion/styled';
import { TDivMotionProps , TClassValueProps } from '@t/dom';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Root = styled(motion.div)``;

type TProps = TClassValueProps &
  TDivMotionProps & {
    sizeClassValue?: string;
    borderSizeClassValue?: string;
  };
export const Loading: FC<TProps> = ({
  sizeClassValue = 'icon-size border-2',
  borderSizeClassValue = 'border-t-gray-1',
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'relative rounded-full border-gray shrink-0',
        classValue,
        sizeClassValue,
        borderSizeClassValue,
      )}
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
