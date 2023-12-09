import {
  BLACK,
  BLACK_2,
} from '../../../css/inputCss';

const OUTSIDE = BLACK_2;
const INSIDE = BLACK;

type TConfig = {
  from: number;
  to: number;
  distance: number;
};
export const resolveGradientBackground =
  ({ from, to, distance }: TConfig) => {
    const fromStop =
      (from / distance) * 100;
    const toStop =
      (to / distance) * 100;
    return `linear-gradient(
    to right,
    ${OUTSIDE} 0%,
    ${OUTSIDE} ${fromStop}%,
    ${INSIDE} ${fromStop}%,
    ${INSIDE} ${toStop}%, 
    ${OUTSIDE} ${toStop}%, 
    ${OUTSIDE} 100%)`;
  };
