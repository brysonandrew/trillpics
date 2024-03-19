import {toast} from 'react-hot-toast';
import {getAudioDurationInSeconds} from '@remotion/media-utils';
import {trytm} from '@bdsqqq/try';

export const getInitAudioTrack = async (
	url: string
): Promise<any> => {
	const [audioDurationInSeconds, audioDurationInSecondsError] = await trytm(
		getAudioDurationInSeconds(url)
	);

	if (audioDurationInSecondsError)
		toast.error('Could not get video duration. Defaulting to 30 seconds.');

	return {
		type: 'audio',
		name: 'Audio',
		src: url,
		naturalDurationInFrames: Math.round((audioDurationInSeconds ?? 30) * 30),
		styling: {},
	};
};
