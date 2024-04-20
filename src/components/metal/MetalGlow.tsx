import { Metal } from '.';
import { FC } from 'react';
import { MetalDarkest } from './MetalDarkest';
import { MetalDark } from './MetalDark';
import { TClassValueProps } from '@brysonandrew/config-types';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { Glow } from '@brysonandrew/layout-effects';
import { TPartialGlowConfigOptions } from '@brysonandrew/motion-filter';

type TProps = {
  isDarkest?: boolean;
} & TPartialGlowConfigOptions &
  TClassValueProps;
export const MetalGlow: FC<TProps> = ({
  isDarkest,
  drop,
  color,
  classValue,
  ...rest
}) => {
  const Root = isDarkest
    ? MetalDarkest
    : MetalDark;
  const { isDarkMode } = useDarkMode();

  return (
    <Glow
      drop={drop ?? 2}
      color={
        color ??
        (isDarkMode ? 'red' : 'white')
      }
      classValue={classValue}
      {...rest}
    >
      <Metal
        Root={Root as any}
        classValue={classValue}
      />
    </Glow>
  );
};
