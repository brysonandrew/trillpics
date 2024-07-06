import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { TBiquadFilterConfig } from "~/pages/video/music/synth/nodes/biquad/types";
import { Modulators } from "~/pages/video/music/modulators";
import { TOscillatorConfig } from "~/pages/video/music/synth/nodes/oscillator/types";
import { defaultsFromAudioparams } from "~/pages/video/music/synth/nodes/defaults/from-audioparams";
import { TBitcrusherModulatorParamsConfig } from "~/pages/video/music/synth/nodes/bitcrusher/types";
import { TKarplusStrongModulatorParamsConfig } from "~/pages/video/music/synth/nodes/karplus/types";
import { box } from "~uno/rules/box";
import { TNoiseModulatorParamsConfig } from "~/pages/video/music/synth/nodes/noise/types";

type TProps =
  | TBitcrusherModulatorParamsConfig
  | TKarplusStrongModulatorParamsConfig
  | TBiquadFilterConfig
  | TOscillatorConfig
  | TNoiseModulatorParamsConfig;

export const ModulatorsParams: FC<
  TProps
> = ({ type, params }) => {
  return (
    <ul
      className="relative row"
      style={{ gap: box.m025 }}
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
            {/* <Modulators
              id={name}
              audioParam={param}
            > */}
              <InputsNumber
                // s="sm"
                name={name}
                title={key}
                onUpdate={onUpdate}
                {...defaultsFromAudioparams(
                  param,
                  key,
                  type
                )}
              />
            {/* </Modulators> */}
          </li>
        );
      })}
    </ul>
  );
};
