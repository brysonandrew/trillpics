import styled from '@emotion/styled';
import { TDivMotionProps } from '@t/dom';
import {
  TChildrenProps,
  TClassValueProps,
} from '@t/index';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { MetalGlow } from '@components/metal/MetalGlow';
import { resolveParentAnimateConfig } from '@utils/effects';
import { TInteractiveShape } from '@t/css/interactive';

const Root = styled(motion.div)``;

type TPosition =
  | 'relative'
  | 'absolute';

type TProps = TDivMotionProps &
  TClassValueProps &
  TChildrenProps & {
    isHover?: boolean;
    position?: TPosition;
    shape?: TInteractiveShape;
  };
export const CB: FC<TProps> = ({
  position = 'relative',
  isHover,
  classValue,
  children,
  shape = 'interactive-circ-lg',
  ...props
}) => {
  return (
    <Root
      className={clsx(
        position,
        'center',
        shape,
        [
          'dark:glow-baby-blue glow-interactive-lg',
        ],
        classValue,
      )}
      {...resolveParentAnimateConfig({
        isHover,
      })}
      {...props}
    >
      <MetalGlow
        drop={1}
        isDarkest
        color='baby-blue'
        classValue='rounded-full glow-baby-blue'
      />
      {children}
    </Root>
  );
};
