import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import {
  ModulatorsParams,
  TOscillatorParams,
} from "~/pages/video/music/synth/nodes/modulators/params";
import { OSCILLATOR_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { TOscillatorNumberOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";

export const NodesOscillatorNumbers: FC =
  () => {
    const {
      audio: { oscillator },
    } = useMusicRefs();
    const handleUpdate =
      (
        name: TOscillatorNumberOptionsKey
      ) =>
      (value: number) => {
        const next = Number(value);
        oscillator.node[name].value =
          next;
      };
    const keys = resolveObjectKeys(
      OSCILLATOR_NUMBER_OPTIONS
    );
    const params = keys.map((key) => {
      const handler: TUpdateNumberHandler =
        handleUpdate(key);
      const param: AudioParam =
        oscillator.node[key];
      return [key, param, handler];
    });
    return (
      <ModulatorsParams
        type="oscillator"
        params={
          params as TOscillatorParams
        }
      />
      // <>
      //   {resolveObjectKeys(

      //   ).map((key) => {
      //     const defaultProps =
      //       propsFromAudioparams(
      //         key,
      //         oscillator.node[key]
      //       );
      //     return (
      //       <InputsNumber
      //         key={key}
      //         name={`oscillator.${key}`}
      //         title={key}
      //         onUpdate={(value) =>
      //           handleUpdate(key, value)
      //         }
      //         {...defaultProps}
      //       />
      //     );
      //   })}
      // </>
    );
  };
