import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { TMusicKey } from "~/store/state/music/types";
import { InputsNumberDefault } from "~/components/inputs/number/default";
import { Modulators } from "~/pages/video/music/modulators";
import { resolveObjectKeys } from "~/utils/object";

const KEY = "playbackRate";
type TProps = {
  musicKey: TMusicKey;
  children: (
    Input: FC,
    children: TChildren
  ) => JSX.Element;
};
export const DrumsPlaybackRateNumbers: FC<
  TProps
> = ({ musicKey }) => {
  const {
    audio: { gains, drums },
  } = useMusicRefs();
  const handleUpdate = (
    name: typeof KEY,
    value: number
  ) => {
    if (name === "playbackRate") {
      resolveObjectKeys(
        drums.bufferSourceRecord
      ).forEach((drumType) => {
        drums.bufferSourceRecord[
          drumType
        ].forEach((beat) => {
          if ("source" in beat) {
            const audioParam =
              beat.source.playbackRate;
            audioParam.value = value;
          }
        });
      });
      drums.options.playbackRate =
        value;
    }
  };

  return (
    <InputsNumber
      name={`${musicKey}.${KEY}`}
      title="playbackRate"
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
        drums.options.playbackRate
      }
      min={0.01}
      max={2}
      step={0.01}
    >
      {(_) => {
        return (
          <Modulators
            id={`${musicKey}.${KEY}`}
            audioParam={
              gains[musicKey].master
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
