import {MutableRefObject} from 'react';

export type TAudioRef = MutableRefObject<HTMLAudioElement>;
export type TAudioStatus = 'idle' | 'ready' | 'error'