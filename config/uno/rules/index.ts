import { Rule } from "unocss";
import { resolveRules as _resolveRules } from "@brysonandrew/uno-rules";
import { GRADIENTS } from "./gradients";
import { SHADOWS } from "./shadows";
import { BORDERS } from "./borders";
import { CURSORS } from "./cursors";
import { NEU } from "./neu";
import { ANIMATIONS } from "./animations";

export const resolveRules = <
  T extends object
>() =>
  [
    ...CURSORS,
    ...SHADOWS,
    ...BORDERS,
    ...NEU,
    ..._resolveRules<T>(),
    ...ANIMATIONS,
    ...GRADIENTS,
  ] as Rule<T>[];
