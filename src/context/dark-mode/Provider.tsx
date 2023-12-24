import type { FC } from 'react';
import type { TChildrenElement } from '@t/index';
import { DarkMode } from '.';
import { useDarkMode } from '@hooks/style/useDarkMode';

type TProviderProps = {
  children: TChildrenElement;
};
export const Provider: FC<TProviderProps> = ({
  children,
}) => {
  const darkMode = useDarkMode();

  return (
    <DarkMode.Provider value={darkMode}>
      {children}
    </DarkMode.Provider>
  );
};
