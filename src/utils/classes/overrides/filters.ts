import {
  COLOR_LOOKUP,
  POSITION_LOOKUP,
} from "~/utils/classes/constants";

type TBiquad = Array<string>["filter"];
type TBiquadHandler =
  Parameters<TBiquad>[0];

export const positionFilter: TBiquadHandler =
  (v) => !(v in POSITION_LOOKUP);

export const opacityFilter: TBiquadHandler =
  (v) => !/opacity-\d{1,2}0/.test(v);

export const sizeFilter: TBiquadHandler =
  (v) => !/h-\d{1,3}|w-\d{1,3}/.test(v);


  export const fontSizeFilter: TBiquadHandler =
  (v) => !/h-\d{1,3}|w-\d{1,3}/.test(v);


export const colorFilter: TBiquadHandler =
  (v) => {
    const [key, value] = v.split("-");
    return (
      key !== "text" ||
      !(value in COLOR_LOOKUP)
    );
  };
