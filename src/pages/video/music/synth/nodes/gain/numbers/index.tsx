import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { TGainNodeKey } from "~/pages/video/music/synth/nodes/gain/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";

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
    midis[name].value = value;
  };
  return (
    <InputsNumber
      name="gain"
      title="gain"
      onUpdate={(value) =>
        handleUpdate("gain", value)
      }
      {...propsFromAudioparams(
        "gain",
        midis.gain
      )}
    >
      {({
        number,
        slider,
        Header,
        Title,
        Box,
        Info,
        Background,
      }) => {
        const Input = () => (
          <Box>
            <Header>
              <Title />
              {number}
            </Header>
          </Box>
        );
        return (
          <>
            {children(
              Input,
              <div className="relative">
                {slider}
                {/* <Background /> */}
                <Info />
              </div>
            )}
          </>
        );
      }}
    </InputsNumber>
  );
};
