import type {FC} from 'react';
import { IconsInfo } from '~/components/icons/info';
import { IconsLoader } from '~/components/icons/loader';
import { TButtonsPlaybackProps, ButtonsPlayback } from '~/pages/video/music/audio/uploaded/item/buttons/playback';
import { TAudioStatus } from '~/pages/video/music/audio/uploaded/item/types';

type TProps = TButtonsPlaybackProps & {
  status: TAudioStatus;
};
export const AudioUploadedItemLeft: FC<TProps> = ({
  status,
  ...playbackProps
}) => {
  return (
    <div>
      {status === 'ready' && <ButtonsPlayback {...playbackProps} />}
      {status === 'idle' && <IconsLoader />}
      {status === 'error' && <IconsInfo classValue="text-red-600" />}
    </div>
  );
};
