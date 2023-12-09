import { useEventListener } from '@hooks/events/useEventListener';
import type { FC } from 'react';
import { Offline } from './Offline';
import { useApp } from '@context/app';

export const Network: FC = () => {
  const { isOffline, onOffline, onOnline } = useApp();
  useEventListener('offline', onOffline);
  useEventListener('online', onOnline);

  if (isOffline) {
    return <Offline />;
  } else {
    return null;
  }
};
