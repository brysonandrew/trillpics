import type { FC } from "react";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { BIQUAD_FILTER_SILDER_PARAMS } from "~/pages/video/music/synth/nodes/filter/constants";
import { TBiquadFilterSliderOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";

export const NodesFilterSliders: FC =
  () => {
    const { filter } =
      useContextMusicInit();
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
          <SliderUncontrolled
            key={key}
            name={key}
            title={key}
            min={0}
            max={1}
            step={0.0001}
            onUpdate={(value) =>
              handleUpdate(key, value)
            }
          />
        ))}
      </div>
    );
  };
