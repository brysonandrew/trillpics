import { CSSProperties } from "react";

export const boxR = (value: number) => {
  return {
    borderRadius: value,
  };
};
export type TRadiusTop  = Pick<
CSSProperties,
| "borderTopLeftRadius"
| "borderTopRightRadius"
>
export const boxRT= (value: number): TRadiusTop => ({
  borderTopLeftRadius: value,
  borderTopRightRadius: value,
});
export type TRadiusBottom  = Pick<
CSSProperties,
| "borderBottomLeftRadius"
| "borderBottomRightRadius"
>
export const boxRB= (value: number): TRadiusBottom  => ({
  borderBottomLeftRadius: value,
  borderBottomRightRadius: value,
});
