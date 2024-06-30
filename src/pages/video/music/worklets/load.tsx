import { useEffect } from "react";
import { log } from "console";
import { WORKLETS } from "~/constants/music/worklets";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { TWorkletKey } from "~/types/worklets";

export const useWorkletsLoad = () => {
  const { audio } = useMusicRefs();

  useEffect(() => {
    const init =
      async (): Promise<void> => {
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

                  await audio.context.audioWorklet.addModule(
                    `music/worklets/${name}.js`
                  );
                  audio.worklets[name] =
                    new AudioWorkletNode(
                      audio.context,
                      name
                    );

                  const value = done
                    ? null
                    : i++;

                  return Promise.resolve(
                    { value, done }
                  );
                } catch (error) {
                  log(
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
      };
    init();
  }, []);
};
