import type { FC } from "react";
import { useMusicContext } from "@index";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useSynthUpdate } from "~/pages/video/music/synth/update";

export const VideoMusicSynthSingle: FC =
  () => {
    const { options } =
      useMusicContext();
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();
    return (
      <>
        <UiInputsSliderRow
          name="options.midi"
          title="midi"
          min={0}
          max={100}
          step={1}
          value={options.midi}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.detune"
          title="detune"
          value={options.detune}
          min={-2400}
          max={2400}
          step={10}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.gain"
          title="gain"
          value={options.gain}
          min={0}
          max={2}
          step={0.1}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.attack"
          title="attack"
          value={options.attack}
          min={0}
          max={10}
          step={0.1}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.decay"
          title="decay"
          value={options.decay}
          min={0}
          max={10}
          step={0.1}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.delay"
          title="delay"
          value={options.delay}
          min={0}
          max={6}
          step={0.1}
          onUpdate={handleUpdate}
        />
      </>
    );
  };
