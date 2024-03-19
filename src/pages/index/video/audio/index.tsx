import { IAudioProps } from '@pages/index/video/audio/types';
import { Visualizer } from '@pages/index/video/audio/visualizer';
import {FC} from 'react';
import {Audio as RemotionAudio} from 'remotion';



export const AudioAndVisualizer: FC<IAudioProps> = (props) => {
	const src = props.src;

	return (
		<>
			<RemotionAudio src={src} />
			<Visualizer {...props} />
		</>
	);
};
