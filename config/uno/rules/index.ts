import { Rule } from "unocss";
import { resolveRules as _resolveRules } from "@brysonandrew/uno-rules";
import { GRADIENTS } from "./gradient";
import { NEU } from "./neu";
import { ANIMATIONS } from "./animations";
import { DOTS } from "./dots";
import { ICON } from "./icons";

export const resolveRules = <
  T extends object
>() =>
  [
    ...ICON,
    ...DOTS,
    ...NEU,
    ..._resolveRules<T>(),
    ...ANIMATIONS,
    ...GRADIENTS,
  ] as Rule<T>[];
