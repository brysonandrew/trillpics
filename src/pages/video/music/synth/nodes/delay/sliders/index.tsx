import type { FC } from "react";
import { SliderUncontrolled } from "~/components/inputs/slider/uncontrolled";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";

export const NodesDelaySliders: FC =
  () => {
    const { delay } =
      useContextMusicInit();
    const handleUpdate = (
      name: TDelayNodeKey,
      value: number
    ) => {
      delay[name].value = value;
    };
    return (
      <div>
        <SliderUncontrolled
          // name="midis.delayTime"
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
      </div>
    );
  };
