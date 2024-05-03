import { TSetState } from "~/store/state/set/types";

export const setState = (
  set: TSetState["set"]
): TSetState => {
  return {
    set,
  };
};
