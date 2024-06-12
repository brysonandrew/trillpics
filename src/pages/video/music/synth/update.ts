import { TUpdateSliderHandler } from "~/components/inputs/slider/row";
import { useMusicContext } from "~/pages/video/music/context";

export const useSynthUpdate = () => {
  const { dispatch } =
    useMusicContext();
  const handleUpdate: TUpdateSliderHandler =
    (name: string, value: any) => {
      const [key, key1] =
        name.split(".");
      const resolveValue = () => {
        switch (key1) {
          case "type": {
            return value;
          }
          default: {
            return +value;
          }
        }
      };
      dispatch({
        type: `update-${
          key as "multi" | "options"
        }`,
        value: {
          [key1]: resolveValue(),
        },
      });
    };

  return handleUpdate;
};
export type TUseUpdateResult =
  ReturnType<typeof useSynthUpdate>;
