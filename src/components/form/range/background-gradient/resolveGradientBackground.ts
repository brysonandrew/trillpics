import {
  BLACK,
  BLACK_2,
} from '../css/inputCss';

const OUTSIDE = BLACK_2;
const INSIDE = BLACK; 

type TConfig = {
  position: number;
  distance: number;
};
export const resolveGradientBackground =
  ({ position, distance }: TConfig) => {
    const stop =
      (position / distance) * 100;
    return `linear-gradient(
    to right,
    ${OUTSIDE} 0%,
    ${INSIDE} ${stop}%,
    ${INSIDE} ${stop}%, 
    ${OUTSIDE} 100%)`;
  };
