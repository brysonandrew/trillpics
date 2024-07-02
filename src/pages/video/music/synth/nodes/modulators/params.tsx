import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { TBiquadFilterConfig } from "~/pages/video/music/synth/nodes/filter/types";
import { Modulators } from "~/pages/video/music/synth/nodes/modulators";
import { TOscillatorConfig } from "~/pages/video/music/synth/nodes/oscillator/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { TBitcrusherModulatorParamsConfig } from "~/pages/video/music/synth/nodes/worklets/bitcrusher/types";
import { TKarplusStrongModulatorParamsConfig } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
import { box } from "~uno/rules/box";

type TProps =
  | TBitcrusherModulatorParamsConfig
  | TKarplusStrongModulatorParamsConfig
  | TBiquadFilterConfig
  | TOscillatorConfig;
export const ModulatorsParams: FC<
  TProps
> = ({ type, params }) => {
  return (
    <ul
      className="relative row"
      style={{ gap: box.m0125 }}
    >
      {params.map((p) => {
        const [key, param, onUpdate] =
          p;

        const name = `${type}.${key}`;
        return (
          <li
            key={key}
            className="relative"
          >
           <Modulators
              id={name}
              audioParam={param}
            >
              <InputsNumber
                name={name}
                title={key}
                onUpdate={onUpdate}
                {...propsFromAudioparams(
                  param,
                  key,
                  type
                )}
              />
            </Modulators>
          </li>
        );
      })}
    </ul>
  );
};
