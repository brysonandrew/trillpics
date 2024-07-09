import { useMemo } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TSourceNodesProps } from "~/pages/video/music/synth/nodes/types";
import { useAmpConnect } from "~/pages/video/music/synth/nodes/nodes/amp/connect";
import { TRingMod } from "~/pages/video/music/_context/refs/audio/ring-mod/types";

export const useNodesSourcesRingMod = (
  config: TSourceNodesProps
) => {
  const { audio } = useMusicRefs();
  const handleAmp =
    useAmpConnect<TRingMod>({
      ...config,
      connect: audio.ringMods.connect,
    });
  console.log("RENDER ", "RING MOD");
  console.log(
    JSON.stringify(audio.worklets)
  );
  const result = useMemo(() => {
    console.log("CREATE ", "RING MOD");

    const processor = handleAmp();
    return processor;
  }, []);
  return result;
};
