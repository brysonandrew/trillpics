import { QUOTE } from "~ops/template/operators";
import { wrap } from "~ops/template/wrap";

export const wrapQuote = <
  T extends string
>(
  v: T
) => wrap<T, typeof QUOTE>(v, QUOTE)
