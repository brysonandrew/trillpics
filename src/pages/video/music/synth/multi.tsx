import type { FC } from "react";
import { useMusicContext } from "@index";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { useSynthUpdate } from "~/pages/video/music/synth/update";

export const VideoMusicSynthMulti: FC =
  () => {
    const { multi } = useMusicContext();
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();

    return (
      <>
        <UiInputsSliderRow
          name="multi.spread"
          title="spread"
          value={multi.spread}
          min={0}
          max={400}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="multi.count"
          title="count"
          value={multi.count}
          min={1}
          max={280}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="multi.stagger"
          title="stagger"
          value={multi.stagger}
          min={0}
          max={5}
          step={0.01}
          onUpdate={handleUpdate}
        />
      </>
    );
  };
