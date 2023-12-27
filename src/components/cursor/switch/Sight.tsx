import styled from '@emotion/styled';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { TChildren, TClassValueProps } from '@t/index';
import { TDivMotionProps } from '@t/dom';
import { useCursor } from '@context/cursor';

const resolveSize = (size: number) => {
  return {
    width: size,
    height: size,
  };
};

const Root = styled(motion.div)``;

type TProps = TDivMotionProps &
  TClassValueProps & {
    size?: number;
    children?: TChildren;
  };
export const Sight: FC<TProps> = ({
  classValue,
  style,
  size = 8,
  children,
  ...props
}) => {
  const { cursor, cursorLabel } = useCursor();

  return (
    <Root
      style={{
        left: cursor.x,
        top: cursor.y,
        originX: '50%',
        originY: '50%',
        opacity: 1,
        ...resolveSize(size),
        ...cursorLabel,
        ...style,
      }}
      className={clsx(
        'fixed center bg-section text-section glow-interactive pointer-events-none rounded-full cursor-default z-50',
        classValue,
      )}
      {...props}
    >
      {children}
    </Root>
  );
};
