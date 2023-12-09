import type {
  ComponentElement,
  FC,
} from 'react';
import styled from '@emotion/styled';
import { TUlMotionProps } from '@t/dom';
import { motion } from 'framer-motion';
import { FADE_PRESENCE_WITH_DELAY } from '@constants/animation';
import clsx from 'clsx';

const Root = styled(motion.ul)``;

type TResolver = () => ComponentElement<
  any,
  any
>;
type TProps = TUlMotionProps & {
  resolvers: TResolver[];
  isInline?: boolean;
};
export const Row: FC<TProps> = ({
  resolvers,
  isInline,
  ...props
}) => {
  return (
    <Root
      className={clsx(
        'row gap-4',
        !isInline && 'w-full',
      )}
      layout
      {...props}
    >
      {resolvers.map(
        (resolver, index) => {
          const rendered = resolver();
          return (
            <motion.li
              layout
              key={
                rendered.key ??
                `${index}`
              }
              style={{fontSize:'0.9rem'}}
              {...FADE_PRESENCE_WITH_DELAY}
            >
              {rendered}
            </motion.li>
          );
        },
      )}
    </Root>
  );
};
