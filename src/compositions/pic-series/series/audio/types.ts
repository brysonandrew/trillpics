import { HTMLAttributes } from "react";

export interface IAudioProps extends HTMLAttributes<HTMLDivElement> {
	src: string;
	barCount?: number;
	numberOfSamples?: number;
	offset?: number;
}
