
import {memo, type FC} from 'react';
import { TAudioUploadedItemWaveformProps, AudioUploadedItemWaveform } from '~/pages/video/music/audio/uploaded/item/progress/waveform';

type TProps = Pick<TAudioUploadedItemWaveformProps, 'onSeek'> & {
  elapsed: number;
  duration: number;
};
let AudioUploadedItemProgress: FC<TProps> = ({elapsed, duration, onSeek}) => {
  return (
      <AudioUploadedItemWaveform
        progress={elapsed / duration}
        onSeek={onSeek}
      />
  );
};

AudioUploadedItemProgress = memo(AudioUploadedItemProgress);
AudioUploadedItemProgress.displayName = 'audio-uploaded-item-progress';
export {AudioUploadedItemProgress};
