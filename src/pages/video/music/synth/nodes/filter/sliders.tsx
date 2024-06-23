import type { FC } from "react";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { TBiquadFilterOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
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
      name: TBiquadFilterOptionsKey,
      value: number
    ) => {
      const next = Number(value);

      // set((draft: TState) => {
      //   draft.midis[name] = next;
      // });
    };

    return (
      <>
        <SliderUncontrolled
          name="filter.frequency"
          title="frequency"
          min={0}
          max={1200}
          step={1}
          onUpdate={(value) =>
            handleUpdate(
              "frequency",
              value
            )
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
          name="midis.detune"
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
