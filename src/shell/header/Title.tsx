import { useApp } from '@brysonandrew/app';
import type { FC } from 'react';

export const Title: FC = () => {
  const { APP_TITLE } = useApp();
  return (
    <h1 className='mt-0.5 pl-0 text-6xl capitalise whitespace-nowrap'>
      {APP_TITLE}
    </h1>
  );
};
