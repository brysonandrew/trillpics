import { InputsNumber } from "~/components/inputs/number";
import { TBiquadFilterConfig } from "~/pages/video/music/synth/nodes/biquad/types";
import { Modulators } from "~/pages/video/music/modulators";
import { TOscillatorConfig } from "~/pages/video/music/synth/nodes/oscillator/types";
import { TBitcrusherModulatorParamsConfig } from "~/pages/video/music/synth/nodes/bitcrusher/types";
import { TKarplusStrongModulatorParamsConfig } from "~/pages/video/music/synth/nodes/karplus/types";
import { TNoiseModulatorParamsConfig } from "~/pages/video/music/synth/nodes/noise/types";
import { TRingModModulatorParamsConfig } from "~/pages/video/music/synth/nodes/ring-mod/types";
import { defaultsFromAudioparams } from "~/pages/video/music/synth/nodes/defaults";
import { TInputsNumberProps } from "~/components/inputs/number/types";
import {
  TAllParamsKey,
  TResolveAudioParamProps,
} from "~/pages/video/music/types";

type TConfig =
  | TBitcrusherModulatorParamsConfig
  | TKarplusStrongModulatorParamsConfig
  | TBiquadFilterConfig
  | TOscillatorConfig
  | TNoiseModulatorParamsConfig
  | TRingModModulatorParamsConfig;

type TProps<K extends TAllParamsKey> =
  Partial<TInputsNumberProps> &
    TResolveAudioParamProps<K> & {
      graphKey: string;
      keys: readonly K[] | K[];
    };
export const ModulatorsParams = <
  K extends TAllParamsKey
>({
  graphKey,
  keys,
  resolveAudioParam,
  ...props
}: TProps<K>) => {
  console.log(graphKey,keys)
  return (
    <>
      {keys.map((paramKey) => {
        const param =
          resolveAudioParam(paramKey);
        const name = `${graphKey}.${paramKey}`;
        return (
          <Modulators
            key={paramKey}
            id={name}
            audioParam={param}
          >
            <InputsNumber
              name={name}
              title={paramKey}
              {...defaultsFromAudioparams(
                param,
                { paramKey, graphKey }
              )}
              onUpdate={(value) => {
                param.value = value;
              }}
              defaultValue={param.value}
              {...props}
            />
          </Modulators>
        );
      })}
    </>
  );
};
