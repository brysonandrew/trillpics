import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
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
      <InputsNumber
        name="delayTime"
        title="delay time"
        onUpdate={(value) =>
          handleUpdate(
            "delayTime",
            value
          )
        }
        {...propsFromAudioparams(
          "delayTime",
          delay.delayTime
        )}
      />
    );
  };
