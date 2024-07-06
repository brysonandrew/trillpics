import { TScaleKey } from "~/constants/scales";
import { useRescaleStatelessHandler } from "~/hooks/music/midis/scale/rescale/stateless";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const useSequenceScale = () => {
  const { schedule } = useMusicRefs();
  const rescaleStateless =
    useRescaleStatelessHandler();
  const update = (value: TScaleKey) => {
    rescaleStateless(value);
  };
  return {
    key: schedule.record.scale.key,
    update,
  };
};
