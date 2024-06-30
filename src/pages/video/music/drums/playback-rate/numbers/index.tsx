import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { TMusicKey } from "~/store/state/music/types";

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
> = ({ musicKey, children }) => {
  const {
    audio: { gains, drums },
  } = useMusicRefs();
  const handleUpdate = (
    name: typeof KEY,
    value: number
  ) => {
    drums.options.playbackRate = value;
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
        // gains[musicKey].master.gain.value
      }
      min={0.01}
      max={2}
      step={0.01}
    >
      {({
        number,
        slider,
        Header,
        Title,
        Box,
      }) => {
        const Input = () => (
          <>
            <Box>
              <Header>
                <Title />
                {number}
              </Header>
            </Box>
          </>
        );
        return (
          <>
            {children(
              Input,

              // <Modulators
              //   id={`${musicKey}.${KEY}`}
              //   audioParam={
              //     gains[musicKey].master.gain
              //   }
              // >
              <div className="relative pl-2">
                {slider}
              </div>
              // </Modulators>
            )}
          </>
        );
      }}
    </InputsNumber>
  );
};
