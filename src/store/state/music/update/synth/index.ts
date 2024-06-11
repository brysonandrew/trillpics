import { TSynthConfig } from "~/hooks/sound/midis/synth/types";
import { musicUpdateSynthTransform } from "~/store/state/music/update/synth/transform";
import { TSet } from "~/store/state/set/types";
import {
  TGet,
  TState,
} from "~/store/types";
export type TMusicUpdateSynthHanlder = (
  name: keyof TSynthConfig,
  value: TSynthConfig[typeof name]
) => void;
export const musicUpdateSynth =
  (set: TSet, get: TGet) =>
  (
    name: keyof TSynthConfig,
    value: TSynthConfig[typeof name]
  ) => {
    const nextConfig = {
      ...get().music.synth.config,
      [name]: value,
    };
    const nextSteps =
      musicUpdateSynthTransform(
        nextConfig
      );

    set((draft: TState) => {
      draft.music.synth.config =
        nextConfig;

      draft.music.synth.steps =
        nextSteps;
    });
  };
