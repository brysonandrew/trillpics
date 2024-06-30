import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { Modulators } from "~/pages/video/music/synth/nodes/modulators";

type TProps = {
  children: (
    Input: FC,
    children: TChildren
  ) => JSX.Element;
};
export const NodesDelayNumbers: FC<
  TProps
> = ({ children }) => {
  const {
    audio: {
      delays: { delay },
    },
  } = useMusicRefs();
  const handleUpdate = (
    name: TDelayNodeKey,
    value: number
  ) => {
    delay[name].value = value;
  };
  const defaultProps =
    propsFromAudioparams(
      delay.delayTime,
      "delayTime",
    );
  return (
    <InputsNumber
      name="delayTime"
      title="delay time"
      onUpdate={(value) =>
        handleUpdate("delayTime", value)
      }
      {...defaultProps}
      min={0}
      step={0.000001}
      max={1}
    >
      {({
        number,
        slider,
        Header,
        Title,
        Box,
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
              <Modulators
                id="delay.delayTime"
                audioParam={
                  delay.delayTime
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
