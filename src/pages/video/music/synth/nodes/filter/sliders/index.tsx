import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { BIQUAD_FILTER_SILDER_PARAMS } from "~/pages/video/music/synth/nodes/filter/constants";
import { TBiquadFilterSliderOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";

export const NodesFilterSliders: FC =
  () => {
    const {
      audio: { filters },
    } = useMusicRefs();
    const handleUpdate = (
      name: TBiquadFilterSliderOptionsKey,
      value: number
    ) => {
      filters.filter[name].value =
        value;
    };
    return (
      <>
        {resolveObjectKeys(
          BIQUAD_FILTER_SILDER_PARAMS
        ).map((key) => (
          <InputsNumber
            key={key}
            name={key}
            title={key}
            onUpdate={(value) =>
              handleUpdate(key, value)
            }
            {...propsFromAudioparams(
              key,
              filters.filter[key]
            )}
          />
        ))}
      </>
    );
  };
