import { TTTitleToUpperCaseSnake } from "~ops/template/text";

export const capitalize = <
  T extends string
>(
  word: T
): `${Uppercase<T>[0]}` =>
  word[0]
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : "";

export const capslock = <
  T extends string
>(
  word: T
) => word.toUpperCase() as Uppercase<T>;

export const dirToSnake = <
  I extends string
>(
  value: I
): TTTitleToUpperCaseSnake<I> =>
  value
    .split(" ")
    .map(capslock)
    .join(
      "_"
    ) as TTTitleToUpperCaseSnake<I>;

export const dirToPascal = <
  I extends string
>(
  value: I
) =>
  value
    .split("/")
    .map(capitalize)
    .join("");

export const dirToKebab = <
  I extends string
>(
  value: I
) =>
  value
    .split("/")
    .map((v) => v.toLowerCase())
    .join("-");
