import { Glow } from '@components/filter-animate/Glow';
import { Metal } from '.';
import { FC } from 'react';
import { MetalDarkest } from './MetalDarkest';
import { MetalDark } from './MetalDark';
import { TPartialGlowConfigOptions } from '@utils/effects/glow';
import { TClassValueProps } from '@t/index';
import { useDarkMode } from '@context/dark-mode';

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
  const Root = isDarkest ? MetalDarkest : MetalDark;
  const {
     isDarkMode ,
  } = useDarkMode();

  return (
    <Glow
      drop={drop ?? 2}
      color={color ?? (isDarkMode ? 'red' : 'white')}
      classValue={classValue}
      {...rest}
    >
      <Metal Root={Root} classValue={classValue} />
    </Glow>
  );
};
