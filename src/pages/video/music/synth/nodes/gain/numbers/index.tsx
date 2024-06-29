import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { TGainNodeKey } from "~/pages/video/music/synth/nodes/gain/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";

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
    console.log(midis);
    midis[name].value = value;
  };
  const defaultProps =
    propsFromAudioparams(
      KEY,
      midis[KEY]
    );
  return (
    <InputsNumber
      name={KEY}
      title="gain"
      onUpdate={(value) =>
        handleUpdate(KEY, value)
      }
      {...defaultProps}
      min={0}
      max={1}
      step={0.005}
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
                <Info />
              </div>
            )}
          </>
        );
      }}
    </InputsNumber>
  );
};
