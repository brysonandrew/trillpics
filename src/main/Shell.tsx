import styled from '@emotion/styled';
import type { TChildren } from '@t/index';
import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { Providers } from '@context/Providers';
import { MotionConfig } from 'framer-motion';
import { MOTION_CONFIG } from '@constants/animation';

type TProps = {
  children: TChildren;
};
export const Shell: FC<TProps> = ({
  children,
}) => {
  return (
    <Providers>
      <Variables />
      <MotionConfig {...MOTION_CONFIG}>
        {children}
      </MotionConfig>
    </Providers>
  );
};
