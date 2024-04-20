import {Audio, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {useAudioData, visualizeAudio} from '@remotion/media-utils';
import {FC} from 'react';
import { IAudioProps } from '~/remotion/pic-series/series/audio/types';
import { DEFAULT_FPS } from '~/remotion/constants';

export const Visualizer: FC<IAudioProps> = ({
	src,
	barCount = DEFAULT_FPS,
	numberOfSamples = 256,
	...props
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const audioData = useAudioData(src);

	if (!audioData) {
		return null;
	}

	const rawVisualization = visualizeAudio({
		fps,
		frame,
		audioData,
		numberOfSamples,
	});

	const visualization = rawVisualization.slice(
		Math.floor(numberOfSamples ** (1 / 32)),
		Math.floor(numberOfSamples ** (1 / 32)) + barCount / 2
	);
	const mirroredVisualization = [
		...visualization.slice(1).reverse(),
		...visualization,
	];

	// Render a bar chart for each frequency, the higher the amplitude,
	// the longer the bar
	// const offset = 1;
	return (
		<>
			<Audio src={src} />
			{mirroredVisualization
				// .slice(offset, offset + 1)
				.map((v, i) => {
					return (
						<div
							{...props}
							key={i}
							style={{
								height: `${interpolate(
									1000 * Math.sqrt(v),
									[0, 500],
									[0, 100]
								)}%`,
								minHeight: '1%',
								width: `2%`,
								backgroundColor: 'orange',
								...props?.style,
							}}
						/>
					);
				})}
		</>
	);
};
