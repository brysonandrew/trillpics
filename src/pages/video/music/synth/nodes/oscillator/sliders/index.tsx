import type { FC } from "react";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { OSCILLATOR_SLIDER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { TOscillatorSliderOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";

export const NodesOscillatorSliders: FC =
  () => {
    const {
      audio: { oscillator },
    } = useMusicRefs();
    const handleUpdate = (
      name: TOscillatorSliderOptionsKey,
      value: number
    ) => {
      const next = Number(value);
      oscillator.node[name].value =
        next;
    };

    return (
      <>
        {resolveObjectKeys(
          OSCILLATOR_SLIDER_OPTIONS
        ).map((key) => {
          return (
            <SliderUncontrolled
              key={key}
              name={`oscilallator.${key}`}
              title={key}
              min={0}
              max={8}
              step={0.1}
              onUpdate={(value) =>
                handleUpdate(key, value)
              }
            />
          );
        })}
      </>
    );
  };
