import { TVideoState } from "src/store/types";
import { shuffle } from "@/utils/array/shuffle";
import { TImmerState } from "@/store";
import { DEFAULT_FPS } from "@/remotion/constants";
import { clampNumbers } from "@/utils/number/clamp-numbers";
import precachePics from "~/app/precache.json";
const { length: picsCount } =
  precachePics;
const inits = [...Array(picsCount)].map(
  (_, index) => `${++index}`
);
const shuffledInits = shuffle(inits);

export const initStoreState: TImmerState =
  (set, get) => ({
    isControls: true,
    fps: DEFAULT_FPS,
    durationInFrames: 1,
    isPlaying: false,
    playerElement: null,
    picsCount,
    picsEntries: [shuffledInits],
    countPicsEntries: () =>
      get().picsEntries.length,
    pics: (from = 0) =>
      get().picsEntries[
        get().countPicsEntries() -
          ++from
      ],
    countPics: () =>
      get().pics().length,
    updatePicsEntries: (
      next?: string[]
    ) => {
      const currPics = get().pics();
      set({
        picsEntries: [
          ...get().picsEntries,
          next ??
            shuffle([...currPics]),
        ],
      });
    },
    toggleControls: (
      next?: boolean
    ) => {
      set((prev: TVideoState) => ({
        isControls:
          next ?? !prev.isControls,
      }));
    },
    videoPics: [],
    isVideoMode: false,
    isPlayerOpen: false,
    togglePlayer: (next?: boolean) => {
      set((prev: TVideoState) => ({
        isPlayerOpen:
          next ?? !prev.isPlayerOpen,
      }));
    },
    toggleVideoMode: (
      next?: boolean
    ) => {
      set((prev: TVideoState) => {
        const isVideoMode =
          next ?? !prev.isVideoMode;
        return {
          isVideoMode,
          isPlayerOpen: false,
        };
      });
    },
    addVideo: (next: string) =>
      set((prev: TVideoState) => {
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
      set((prev: TVideoState) => {
        const nextVideoPics = next
          ? [
              ...new Set([
                ...prev.videoPics.filter(
                  (v) => v !== next
                ),
              ]),
            ]
          : [];
        if (
          nextVideoPics.length === 0
        ) {
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
    seekBySeconds: (
      seconds: number
    ) => {
      const state = get();
      if (!state.playerElement) {
        throw Error(
          "player-element-not-defined"
        );
      }
      const min =
        state.playerElement?.getCurrentFrame?.() +
        state.fps * seconds;
      const max =
        state.durationInFrames;

      state.playerElement?.seekTo(
        clampNumbers({
          min,
          max,
        })
      );
    },
    setCurrentFrame: (
      nextCurrentFrame
    ) => {
      const { playerElement } = get();
      if (!playerElement) return;
      playerElement.seekTo(
        nextCurrentFrame
      );
    },
    updateState: set,
  });
