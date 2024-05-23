import { lowercaseItem } from "~ops/format/lowercase";

export type TTSnakeToDir<
T extends string,
A extends string = ''
> = T extends `${infer F}${infer R}`
? TTSnakeToDir<
    R,
    `${A}${F extends "_"
      ? "/"
      : `${Lowercase<F>}`}`
  >
: A;


export const snakeToDir = <
  I extends string
>(
  value: I
): TTSnakeToDir<I> =>
  value
    .split("_")
    .map(lowercaseItem)
    .join(
      "/"
    ) as TTSnakeToDir<I>;
