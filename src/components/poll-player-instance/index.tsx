import { useTimeoutRef } from '@brysonandrew/hooks-window';
import {useEffect, type FC} from 'react';
import { IconsLoader } from '~/components/icons/loader';

export const PollPlayerInstance: FC = () => {
  const {timeoutRef} = useTimeoutRef();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      window.location.reload();
    }, 8000);
  }, []);
  return (
      <div className="flex flex-row items-center gap-2 h-full">
        <IconsLoader />
        Loading media player
      </div>
  );
};
