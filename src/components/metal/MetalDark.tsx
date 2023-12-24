import type { FC } from 'react';
import { TRootProps, Metal } from '.';

export const MetalDark: FC<TRootProps> = ({ ...props }) => (
  <Metal {...props} />
);
