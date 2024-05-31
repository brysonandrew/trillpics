import { TGenerateState } from "~/store/state/generate/types";
import { TStateHandler } from "~/store/types";

export const generateState: TStateHandler<
  TGenerateState
> = () => ({
  isStarted: false,
  progress: 0,
  error: "",
});
