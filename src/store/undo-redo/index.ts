import { ZundoOptions } from "zundo";
import isDeepEqual from "fast-deep-equal";
import { THoverState } from "~/store/slices/hover/types";
import { TStateWithPlayerState } from "~/store/types";

export type TPartialZundoState = Pick<
  THoverState,
  "hover"
>;

const equality = (
  prev: TPartialZundoState,
  curr: TPartialZundoState
) => isDeepEqual(prev, curr);

export const OPTIONS_UNDO_REDO: ZundoOptions<
  TStateWithPlayerState,
  TStateWithPlayerState
> = {
  limit: 100,
  equality,
  // partialize: (state: TCombinedSlices) =>
  //   ({
  //   } as TCombinedSlices),
  // handleSet: (handleSet) =>
  //   debounce<typeof handleSet>((state) => {
  //     handleSet(state);
  //   }, 600),
};
