import { capitalizeItem } from "~ops/format/capitalize";
import { capslockItem } from "~ops/format/capslock";
import { TTDirToUpperCaseSnake } from "~ops/format/uppercase";

export const dirToSnake = <
  I extends string
>(
  value: I
): TTDirToUpperCaseSnake<I> =>
  value
    .split("/")
    .map(capslockItem)
    .join(
      "_"
    ) as TTDirToUpperCaseSnake<I>;

export const dirToPascal = <
  I extends string
>(
  value: I
) =>
  value
    .split("/")
    .map(capitalizeItem)
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
