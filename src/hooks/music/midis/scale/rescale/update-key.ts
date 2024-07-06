import { TScaleKey } from "~/constants/scales";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const useRescaleUpdateKeyHandler =
  () => {
    const { schedule } = useMusicRefs();

    const handler = (
      value: TScaleKey
    ) => {
      schedule.update.key(value);
    };
    return handler;
  };
