import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { BIQUAD_FILTER_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/filter/constants";
import { TBiquadFilterNumberOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useIdContext } from "~/pages/video/music/_context/init/refs/audio/id";

export const NodesFilterSliders: FC =
  () => {
    const {
      audio: { filters },
    } = useMusicRefs();
    const handleUpdate = (
      name: TBiquadFilterNumberOptionsKey,
      value: number
    ) => {
      filters.refs[id][name].value =
        value;
    };
    return (
      <>
        {resolveObjectKeys(
          BIQUAD_FILTER_NUMBER_OPTIONS
        ).map((key) => (
          <InputsNumber
            key={key}
            name={key}
            title={key}
            onUpdate={(value) =>
              handleUpdate(key, value)
            }
            {...propsFromAudioparams(
              filters.refs[id][key],
              key,
            )}
          />
        ))}
      </>
    );
  };
