import {FC} from 'react';
import { PollPlayerInstance } from '~/components/poll-player-instance';
import { useTrillPicsStore } from '~/store/middleware';
import { isPlayerInstance } from '~/utils/validation/is/player';

export function withPlayerInstanceCheck<T extends object>(I: FC<T>) {
  const C = (props: T) => {
    const {playerInstance} = useTrillPicsStore(({playerInstance}) => ({
      playerInstance,
    }));

    if (isPlayerInstance(playerInstance)) return <I {...props} />;
    return <PollPlayerInstance />;
  };
  return C;
}
