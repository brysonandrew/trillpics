import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { Modulators } from "~/pages/video/music/modulators";
import { TMusicKey } from "~/store/state/music/types";
import { InputsNumberDefault } from "~/components/inputs/number/default";
import { TDualAmp } from "~/pages/video/music/_context/refs/audio/gains/types";
import {
  GAINS_MASTER_RANGE,
  GAINS_PREAMP_RANGE,
} from "~/pages/video/music/controls/gain/constants";
import { TInputsNumberProps } from "~/components/inputs/number/types";

export type TControlsGainProps =
  Partial<TInputsNumberProps> & {
    ampKey: keyof TDualAmp;
    musicKey: TMusicKey;
  };
export type TPartialControlsGainProps =
  Partial<TControlsGainProps>;
export const ControlsGain: FC<
  TControlsGainProps
> = ({ musicKey, ampKey }) => {
  const {
    audio: { gains },
  } = useMusicRefs();
  const audioParam =
    gains[musicKey][ampKey].gain;

  const name = `gains.${musicKey}.${ampKey}.gain`;
  return (
    <InputsNumber
      name={name}
      title="gain"
      onUpdate={(value) => {
        audioParam.value = value;
      }}
      replacer={(v) => {
        const next = Number(
          v.toFixed(3)
        ).toString();

        return next;
      }}
      defaultValue={audioParam.value}
      {...(ampKey === "master"
        ? GAINS_MASTER_RANGE
        : GAINS_PREAMP_RANGE)}
    >
      {(_) => {
        return (
          <Modulators
            id={name}
            audioParam={audioParam}
          >
            <InputsNumberDefault
              {..._}
            />
          </Modulators>
        );
      }}
    </InputsNumber>
  );
};
