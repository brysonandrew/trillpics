import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { BIQUAD_FILTER_SILDER_PARAMS } from "~/pages/video/music/synth/nodes/filter/constants";
import { TBiquadFilterSliderOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";

export const NodesFilterSliders: FC =
  () => {
    const {
      audio: {
        filters: { filter },
      },
    } = useMusicRefs();
    const handleUpdate = (
      name: TBiquadFilterSliderOptionsKey,
      value: number
    ) => {
      filter[name].value = value;
    };
    return (
      <div className="column">
        {resolveObjectKeys(
          BIQUAD_FILTER_SILDER_PARAMS
        ).map((key) => (
          <InputsNumber
            key={key}
            name={`filter.${key}`}
            title={key}
            onUpdate={(value) =>
              handleUpdate(key, value)
            }
            {...propsFromAudioparams(
              key,
              filter[key]
            )}
          />
        ))}
      </div>
    );
  };
