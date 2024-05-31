import { TGenerateState } from "~/store/state/generate/types";
import { TStateHandler } from "~/store/types";

export const generateState: TStateHandler<
  TGenerateState
> = () => ({
  isDownloadComplete: false,
  logs:[],
  progress: null,
  download:null,
  error: null,
});
