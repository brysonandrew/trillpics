import { TScaleKey } from "~/constants/scales";
import { useRescaleStatefulHandler } from "~/hooks/music/midis/scale/rescale/stateful";
import { useRescaleStatelessHandler } from "~/hooks/music/midis/scale/rescale/stateless";
import { useTransientPlayingKeys } from "~/hooks/music/play/transient";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

export const useNodesScale = () => {
  const playinKeysRef =
    useTransientPlayingKeys();
  useContextMusicInit();
  const { scale } = useTrillPicsStore(
    ({ scale }) => ({
      scale,
    })
  );

  const rescaleStateful =
    useRescaleStatefulHandler();
  const rescaleStateless =
    useRescaleStatelessHandler();
  const update = (
    value: TScaleKey
  ) => {
    if (
      !playinKeysRef.current.includes(
        "midis"
      )
    ) {
      rescaleStateful(value);
    }
    rescaleStateless(value);
  };
  return {
    key: scale.key,
    update,
  };
};
