import type { FC } from 'react';
import styled from '@emotion/styled';
import clsx from 'clsx';
import {
  TChildren,
  TClassValueProps,TDivMotionProps
} from '@brysonandrew/config-types';
import { motion } from 'framer-motion';

const _Root = styled(motion.div)``;

export type TProps = TDivMotionProps &
  TClassValueProps & {
    Root?: FC<TDivMotionProps>;
    label?: TChildren;
  };
export const Label = (
  props: TProps,
) => {
  const {
    classValue,
    Root = _Root,
    children,
    label,
    title,
    ...labelProps
  } = props;
  return (
    <Root
      className={clsx(
        'relative column-start gap-2 w-full',
        classValue,
      )}
      {...labelProps}
    >
      <>
        {label ? <>{label}</> : null}
        {children}
      </>
    </Root>
  );
};
