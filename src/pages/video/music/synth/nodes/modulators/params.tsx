import type { FC } from "react";
import { InputsNumber } from "~/components/inputs/number";
import { TUpdateNumberHandler } from "~/components/inputs/slider/types";
import { Modulators } from "~/pages/video/music/synth/nodes/modulators";
import { TOscillatorNumberOptionsKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { box } from "~uno/rules/box";
export type TOscillatorParams = [
  TOscillatorNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];

export type TOscillatorConfig = {
  type: "oscillator";
  params: TOscillatorParams;
};

export type TBiquadFilterParams = [
  TOscillatorNumberOptionsKey,
  AudioParam,
  TUpdateNumberHandler
][];
export type TBiquadFilterConfig = {
  type: "filter";
  params: TBiquadFilterParams;
};
type TProps =
  | TBiquadFilterConfig
  | TOscillatorConfig;
export const ModulatorsParams: FC<
  TProps
> = ({ type, params }) => {
  return (
    <ul className="relative column-stretch"
    style={{gap:box.m0125}}
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
                  key,
                  param
                )}
              />
            </Modulators>
          </li>
        );
      })}
    </ul>
  );
};
