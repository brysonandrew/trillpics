import { FC } from "react";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { BIQUAD_FILTER_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/filter/constants";
import { TBiquadFilterNumberOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import {
  ModulatorsParams,
  TBiquadFilterParams,
} from "~/pages/video/music/synth/nodes/modulators/params";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveObjectKeys } from "~/utils/object";

export const NodesFilterNumbers: FC =
  () => {
    const {
      audio: {
        filters: { filter },
      },
    } = useMusicRefs();
    const handleUpdate =
      (
        name: TBiquadFilterNumberOptionsKey
      ) =>
      (value: number) => {
        filter[name].value = value;
      };

    const keys = resolveObjectKeys(
      BIQUAD_FILTER_NUMBER_OPTIONS
    );
    const params = keys.map((key) => {
      const handler: TUpdateNumberHandler =
        handleUpdate(key);
      const param: AudioParam =
        filter[key];
      return [key, param, handler];
    });
    return (
      <ModulatorsParams
        type="filter"
        params={
          params as TBiquadFilterParams
        }
      />
      //   {keys.map((key) => {
      //     const name = ;
      //     return (
      //       <li
      //         key={key}
      //         className="relative"
      //       >
      //         <Modulators
      //           id={name}
      //           audioParam={filter[key]}
      //         />
      //         <InputsNumber
      //           name={name}
      //           title={key}
      //           onUpdate={(value) =>
      //             handleUpdate(
      //               key,
      //               value
      //             )
      //           }
      //           {...propsFromAudioparams(
      //             key,
      //             filter[key]
      //           )}
      //         />
      //       </li>
      //     );
      //   })}
      // </ul>
    );
  };
