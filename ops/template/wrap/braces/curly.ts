import { BRACES_CURLY } from "~ops/template/operators";
import { wrap } from "~ops/template/wrap";

export const wrapBracesCurly = <
  T extends string
>(
  v: T
) =>
  wrap<
    T,
    (typeof BRACES_CURLY)["open"],
    (typeof BRACES_CURLY)["closed"]
  >(
    v,
    BRACES_CURLY["open"],
    BRACES_CURLY["closed"]
  );
