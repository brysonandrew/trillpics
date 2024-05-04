import { BRACES_SQUARE } from "~ops/template/operators";
import { wrap } from "~ops/template/wrap";

export const wrapBracesSquare = <
  T extends string
>(
  v: T
) =>
  wrap<
    T,
    (typeof BRACES_SQUARE)["open"],
    (typeof BRACES_SQUARE)["closed"]
  >(
    v,
    BRACES_SQUARE["open"],
    BRACES_SQUARE["closed"]
  );
