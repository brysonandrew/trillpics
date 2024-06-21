import type { FC } from "react";
import { UiInputsSliderRow } from "~/components/inputs/slider/row";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { TMidisOptionsKey, TMidisSliderOptionsKey } from "~/store/state/music/types";
import { TState } from "~/store/types";

export const MidisOscillator: FC =
  () => {
    const { audio, midisMaster } =
      useMusicInitContext();
    const { set } = useTrillPicsStore(
      ({ set }) => ({
        set,
      })
    );
    const handleUpdate = (
      name: TMidisSliderOptionsKey,
      value: number
    ) => {
      const next = Number(value);

      set((draft: TState) => {
        draft.midis[name] = next;
      });
      console.log(name, value)
      if (name === "delayTime") {
        audio.delay[name].value = next;
        return;
      }
      if (name === "gain") {
        midisMaster[name].value = next;
        return;
      }
      audio.oscillator.node[
        name
      ].value = next;
    
    };

    return (
      <>
        <UiInputsSliderRow
          name="midis.gain"
          title="gain"
          min={0}
          max={8}
          step={0.1}
          onUpdate={(value) =>
            handleUpdate("gain", value)
          }
        />
        <UiInputsSliderRow
          name="midis.frequency"
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
        <UiInputsSliderRow
          name="midis.delayTime"
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
        <UiInputsSliderRow
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
