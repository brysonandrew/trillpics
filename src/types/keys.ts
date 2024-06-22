import { NONAME_PREFIX } from "~/constants/keys";

export type TNonamePrefix =
  typeof NONAME_PREFIX;

  export type TNoname = `${TNonamePrefix}${string|number}`