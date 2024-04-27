import { DEFAULT_FPS } from "~/constants/remotion";
import { TDirectorState } from "~/store/slices/director/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";

export const directorState: TStateHandler<
  TDirectorState
> = (set, get): TDirectorState => ({
  fps: DEFAULT_FPS,
  durationInFrames: 1,
  isPlaying: false,
  videoPics: [],
  countVideoPics: () =>
    get().videoPics.length,
  isVideoPics: () =>
    Boolean(get().countVideoPics()),
  addVideo: (next: string) =>
    set((prev: TState) => {
      const nextVideoPics = [
        ...new Set([
          ...prev.videoPics,
          next,
        ]),
      ];
      return {
        videoPics: nextVideoPics,
        durationInFrames:
          nextVideoPics.length *
          get().fps,
      };
    }),
  removeVideo: (next?: string) =>
    set((prev: TState) => {
      const nextVideoPics = next
        ? [
            ...new Set([
              ...prev.videoPics.filter(
                (v) => v !== next
              ),
            ]),
          ]
        : [];
      if (nextVideoPics.length === 0) {
        get().updatePicsEntries(
          get().picsEntries[0]
        );
      }

      return {
        videoPics: nextVideoPics,
        durationInFrames:
          nextVideoPics.length *
          get().fps,
      };
    }),
});
