import type { FC } from 'react';
import { APP_TITLE } from '@app/index';

export const Title: FC = () => {
  return (
    <h1 className='mt-0.5 pl-0 capitalise whitespace-nowrap'>
      {APP_TITLE}
    </h1>
  );
};
