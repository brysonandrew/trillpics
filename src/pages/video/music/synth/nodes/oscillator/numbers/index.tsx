import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { OSCILLATOR_SLIDER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { TOscillatorSliderOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";

export const NodesOscillatorNumbers: FC =
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
          const defaultProps =
            propsFromAudioparams(
              key,
              oscillator.node[key]
            );
          return (
            <InputsNumber
              key={key}
              name={`oscillator.${key}`}
              title={key}
              onUpdate={(value) =>
                handleUpdate(key, value)
              }
              {...defaultProps}
            />
          );
        })}
      </>
    );
  };
