import { TScaleKey } from "~/constants/scales";
import { useRescaleStatefulHandler } from "~/hooks/scale/rescale/stateful";
import { useRescaleStatelessHandler } from "~/hooks/scale/rescale/stateless";
import { useTransientPlayingKeys } from "~/hooks/music/play/transient";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

export const useNodesScale = () => {
  const {schedule} = useMusicRefs()
  // const playinKeysRef =
  //   useTransientPlayingKeys();
  // const { scale } = useTrillPicsStore(
  //   ({ scale }) => ({
  //     scale,
  //   })
  // );

  // const rescaleStateful =
  //   useRescaleStatefulHandler();
  const rescaleStateless =
    useRescaleStatelessHandler();
  const update = (value: TScaleKey) => {
    // if (
    //   !playinKeysRef.current.includes(
    //     "midis"
    //   )
    // ) {
    //   rescaleStateful(value);
    // }
    rescaleStateless(value);
  };
  return {
    key: schedule.record.scale.key,
    update,
  };
};
