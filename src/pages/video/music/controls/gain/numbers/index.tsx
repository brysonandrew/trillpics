import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { TGainNodeKey } from "~/pages/video/music/synth/nodes/gain/types";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { Modulators } from "~/pages/video/music/modulators";
import { TMusicKey } from "~/store/state/music/types";
import { InputsNumberDefault } from "~/components/inputs/number/default";

const KEY = "gain";
type TProps = {
  musicKey: TMusicKey;
  ampKey?: "master" | "preamp";
  children: (
    Input: FC,
    children: TChildren
  ) => JSX.Element;
};
export const NodesGainNumbers: FC<
  TProps
> = ({
  musicKey,
  ampKey = "master",
}) => {
  const {
    audio: { gains },
  } = useMusicRefs();
  const handleUpdate = (
    name: TGainNodeKey,
    value: number
  ) => {
    gains[musicKey][ampKey][
      name
    ].value = value;
  };

  return (
    <InputsNumber
      name={`${musicKey}.${ampKey}.${KEY}`}
      title="gain"
      onUpdate={(value) =>
        handleUpdate(KEY, value)
      }
      replacer={(v) => {
        const next = Number(
          v.toFixed(3)
        ).toString();

        return next;
      }}
      defaultValue={
        gains[musicKey][ampKey].gain
          .value
      }
      {...(ampKey === "master"
        ? {
            min: 0,
            max: 1,
            step: 0.0001,
          }
        : {
            min: 0,
            max: 100,
            step: 0.1,
          })}
    >
      {(_) => {
        return (
          <Modulators
            id={`${musicKey}.${ampKey}.gain`}
            audioParam={
              gains[musicKey][ampKey]
                .gain
            }
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
