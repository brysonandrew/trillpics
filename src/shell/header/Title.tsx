import { useApp } from '@brysonandrew/app';
import type { FC } from 'react';

export const Title: FC = () => {
  const { APP_TITLE } = useApp();
  return (
    <h1 className='text-4.5xl xs:text-5.5xl sm:text-6xl font-display capitalise whitespace-nowrap'>
      {APP_TITLE}
      {/* dark speed art */}
    </h1>
  );
};
