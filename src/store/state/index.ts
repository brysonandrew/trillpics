import { coreState } from "~/store/state/core/state";
import { generateState } from "~/store/state/generate";
import { hoverState } from "~/store/state/hover/state";
import { picsState } from "~/store/state/pics/state";
import { scrollState } from "~/store/state/scroll";
import { setState } from "~/store/state/set/state";
import { tableState } from "~/store/state/table/state";
import {
  TStateCreatorParameters,
  TState,
} from "~/store/types";

export const initState = (
  ...a: TStateCreatorParameters
): TState => {
  return {
    ...coreState(...a),
    ...scrollState(...a),
    ...tableState(...a),
    ...picsState(...a),
    ...hoverState(...a),
    ...generateState(...a),
    ...setState(a[0]),
  };
};
