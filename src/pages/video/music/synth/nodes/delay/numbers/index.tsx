import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { Modulators } from "~/pages/video/music/synth/nodes/modulators";
import { useIdContext } from "~/pages/video/music/_context/init/refs/audio/id";
import { TUpdateNodeHandlerProps, TUpdateNumberHandlerProps } from "~/components/inputs/slider/types";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";

type TProps = TUpdateNodeHandlerProps<TDelayNodeKey> & {
  children: (
    Input: FC,
    children: TChildren
  ) => JSX.Element;
};
export const NodesDelayNumbers: FC<
  TProps
> = ({ onUpdate, children }) => {
  const {
    audio: { delays },
  } = useMusicRefs();
  const id = useIdContext();
 
  const defaultProps =
    propsFromAudioparams(
      delays.refs[id].delayTime,
      "delayTime"
    );
  return (
    <InputsNumber
      name="delayTime"
      title="delay time"
      onUpdate={(value) =>
        onUpdate?.("delayTime", value)
      }
      {...defaultProps}
      min={0}
      step={0.000001}
      max={1}
    >
      {({
        Number,
        Slider,
        Header,
        Title,
        Box,
      }) => {
        const Input = () => (
          <Box>
            <Header>
              <Title />
              <Number />
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
                  delays.refs[id]
                    .delayTime
                }
              >
                <div className="relative pl-2">
                  <Slider />
                </div>
              </Modulators>
            )}
          </>
        );
      }}
    </InputsNumber>
  );
};
