import {
  Orchestration,
  Keyframes,
  MotionValue,
  AnimationPlaybackControls,
} from 'framer-motion';

export type TTransition = Orchestration | Keyframes;

export type TMotionPoint = {
  x: MotionValue;
  y: MotionValue;
};

export type TAnimationControlsPoint = {
  x: AnimationPlaybackControls;
  y: AnimationPlaybackControls;
};
