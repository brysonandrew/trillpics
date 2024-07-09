import { WORKLETS } from "~/constants/music/worklets";
import { TWorkletKey } from "~/types/worklets";
import { TLoadWorklets } from "~/pages/video/music/_context/load/worklets/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useLoadEffect } from "~/pages/video/music/_context/load/worklets/effect";

export const loadWorklet = async (
  context: AudioContext,
  name: TWorkletKey
) =>
  await context.audioWorklet.addModule(
    `music/worklets/${name}.js`
  );

export const useLoadWorklets = () => {
  const { audio } = useMusicRefs();
  const handleLoad = useLoadEffect();
  const init =
    async (): Promise<TLoadWorklets> => {
      const asyncIterable = {
        [Symbol.asyncIterator]() {
          let i = 0;
          return {
            next: async () => {
              try {
                const done =
                  i ===
                  WORKLETS.length - 1;
                const name: TWorkletKey =
                  WORKLETS[i];
                if (
                  !audio.worklets[name]
                ) {
                  await loadWorklet(
                    audio.context,
                    name
                  );
                  handleLoad(name);

                  audio.worklets[name] =
                    true;
                }

                const value = done
                  ? null
                  : i++;

                return Promise.resolve({
                  value,
                  done,
                });
              } catch (error) {
                console.log(
                  "Error loading worklet"
                );
              }
            },
            return: () => ({
              done: true,
              value: `Finished early on item ${
                i + 1
              }`,
            }),
          };
        },
      };
      try {
        for await (const _ of asyncIterable) {
        }
      } catch (error) {
        console.error(
          "Something went wrong",
          error
        );
      }
      return audio.worklets;
    };

  return init;
};
