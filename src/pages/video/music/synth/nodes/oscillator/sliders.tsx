import type { FC } from "react";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { TOscillatorSliderOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

export const NodesOscillator: FC =
  () => {
    const {
      oscillator,
      delay,
      midisMaster,
    } = useContextMusicInit();
    const { set } = useTrillPicsStore(
      ({ set }) => ({
        set,
      })
    );
    const handleUpdate = (
      name: TOscillatorSliderOptionsKey,
      value: number
    ) => {
      const next = Number(value);

      // set((draft: TState) => {
      //   draft.midis[name] = next;
      // });

      if (name === "delayTime") {
        delay[name].value = next;
        return;
      }
      if (name === "gain") {
        midisMaster[name].value = next;
        return;
      }
      oscillator.node[name].value =
        next;
    };

    return (
      <>
        <SliderUncontrolled
          title="gain"
          min={0}
          max={8}
          step={0.1}
          onUpdate={(value) =>
            handleUpdate("gain", value)
          }
        />
        <SliderUncontrolled
          title="Hz"
          min={0}
          max={440}
          step={0.1}
          onUpdate={(value) =>
            handleUpdate(
              "frequency",
              value
            )
          }
        />
        <SliderUncontrolled
          title="delay time"
          min={0}
          max={1}
          step={0.0001}
          onUpdate={(value) =>
            handleUpdate(
              "delayTime",
              value
            )
          }
        />
        <SliderUncontrolled
          title="detune"
          min={-1200}
          max={1200}
          step={1}
          onUpdate={(value) =>
            handleUpdate(
              "detune",
              value
            )
          }
        />
      </>
    );
  };
