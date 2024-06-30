import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { TGainNodeKey } from "~/pages/video/music/synth/nodes/gain/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { Modulators } from "~/pages/video/music/synth/nodes/modulators";

const KEY = "gain";
type TProps = {
  children: (
    Input: FC,
    children: TChildren
  ) => JSX.Element;
};
export const NodesGainNumbers: FC<
  TProps
> = ({ children }) => {
  const {
    audio: {
      gains: { midis },
    },
  } = useMusicRefs();
  const handleUpdate = (
    name: TGainNodeKey,
    value: number
  ) => {
    console.log(name, value, midis);
    midis[name].value = value;
  };

  return (
    <InputsNumber
      name={`midis.${KEY}`}
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
      defaultValue={midis.gain.value}
      min={0}
      max={1}
      step={0.001}
    >
      {({
        number,
        slider,
        Header,
        Title,
        Box,
        Info,
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
                
                <Modulators
                  id="midis.gain"
                  audioParam={
                    midis.gain
                  }
                >
                  <div className="relative pl-2">
                  {slider}
                </div>
                </Modulators>
            )}
          </>
        );
      }}
    </InputsNumber>
  );
};
