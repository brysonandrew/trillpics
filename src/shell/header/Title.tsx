import { useApp } from '@brysonandrew/app';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { HOME_ROUTE } from '@constants/routes';
import { useBase } from '@shell/providers/context/base';
import type { FC } from 'react';
import { useLocation } from 'react-router';

export const Title: FC = () => {
  const { onRandomize } = useBase();
  const { APP_TITLE } = useApp();
  const { pathname } = useLocation();
  const isShufffle = pathname === HOME_ROUTE
  const { darkKey } = useDarkMode();
  const handleClick = () => {
    onRandomize();
  };

  return (
    <>
      <h1
        className='text-4.5xl xs:text-5.5xl sm:text-6xl font-display capitalise whitespace-nowrap'
        style={{
          fontFamily:
            'Saiba 45 Outline',
        }}
      >
        {APP_TITLE}
        {/* dark speed art */}
      </h1>
      <button
        className='relative mt-1 ml-2 uppercase text-xl tracking-wide h-6 w-6 sm:(h-10 w-10)'
        onClick={handleClick}
      >
        <img
          className='fill h-full'
          src={`/logo-${darkKey}.svg`}
          alt={`Logo ${darkKey}`}
        />
        {isShufffle && (
          <img
            className='fill h-full origin-center opacity-80 hover:opacity-100'
            src={`/logo-${darkKey}.svg`}
            alt={`Logo ${darkKey}`}
            style={{
              filter: 'blur(2px)',
              transform: 'scale(1.2)',
            }}
          />
        )}
      </button>
    </>
  );
};
