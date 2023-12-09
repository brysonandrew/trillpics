import type { FC } from 'react';
import { TChildren } from '@t/index';
import {
  THoverKeyConfig,
  useHoverKey,
} from '@hooks/dom/useHoverKey';

type TProps = {
  children(
    config: THoverKeyConfig,
  ): TChildren;
};
export const HoverKey: FC<TProps> = ({
  children,
}) => {
  const config = useHoverKey();
  return <>{children(config)}</>;
};
