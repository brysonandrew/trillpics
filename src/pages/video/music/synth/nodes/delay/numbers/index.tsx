import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";

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
  return (
    <InputsNumber
      name="delayTime"
      title="delay time"
      onUpdate={(value) =>
        handleUpdate("delayTime", value)
      }
      {...propsFromAudioparams(
        "delayTime",
        delay.delayTime
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
