import {
  COLOR_LOOKUP,
  POSITION_LOOKUP,
} from "~/utils/classes/constants";

type TFilter = Array<string>["filter"];
type TFilterHandler =
  Parameters<TFilter>[0];

export const positionFilter: TFilterHandler =
  (v) => !(v in POSITION_LOOKUP);

export const opacityFilter: TFilterHandler =
  (v) => !/opacity-\d{1,2}0/.test(v);

export const sizeFilter: TFilterHandler =
  (v) => !/h-\d{1,3}|w-\d{1,3}/.test(v);


  export const fontSizeFilter: TFilterHandler =
  (v) => !/h-\d{1,3}|w-\d{1,3}/.test(v);


export const colorFilter: TFilterHandler =
  (v) => {
    const [key, value] = v.split("-");
    return (
      key !== "text" ||
      !(value in COLOR_LOOKUP)
    );
  };
