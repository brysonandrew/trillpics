import { Rule } from "unocss";
import { resolveRules as _resolveRules } from "@brysonandrew/uno-rules";
import { GRADIENTS } from "./gradient";
import { SHADOWS } from "./shadows";
import { BORDERS } from "./borders";
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
    ...SHADOWS,
    ...BORDERS,
    ...NEU,
    ..._resolveRules<T>(),
    ...ANIMATIONS,
    ...GRADIENTS,
  ] as Rule<T>[];
