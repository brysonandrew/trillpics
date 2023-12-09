import type { FC } from 'react';
import { P1 } from '@components/layout/space/P1';

export const Offline: FC = () => {
  return (
    <div className='relative text-color-3 px-6 uppercase z-10'>
      <P1 />
      <p className='row'>
        <span>You are</span>
        <P1 element='span' />
        <strong>offline</strong>
      </p>
    </div>
  );
};
