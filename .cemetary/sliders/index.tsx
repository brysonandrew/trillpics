import type { FC } from "react";
import React from "react";

export const NodesOscillatorSliders: FC =
  () => {
    const {
      audio: { oscillator },
    } = useMusicRefs();
    const handleUpdate = (
      name: TOscillatorNumberOptionsKey,
      value: number
    ) => {
      const next = Number(value);
      oscillator.node[name].value =
        next;
    };

    return (
      <>
        {resolveObjectKeys(
          OSCILLATOR_NUMBER_OPTIONS
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
