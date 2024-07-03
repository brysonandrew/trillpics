import type { FC } from "react";
import { TChildren } from "@brysonandrew/config-types";
import { InputsNumber } from "~/components/inputs/number";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { Modulators } from "~/pages/video/music/synth/nodes/modulators";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";

type TProps =
  TUpdateNodeHandlerProps<TDelayNodeKey> & {
    children: (
      Input: FC,
      children: TChildren
    ) => JSX.Element;
  };
export const NodesDelayNumbers: FC<
  TProps
> = (props) => {
  const {
    defaultValue,
    onUpdate,
    children,
  } = props;
  const {
    audio: { delays },
  } = useMusicRefs();
  console.log(delays);
  //  console.log(id)
  // const defaultProps =defaultValue()
  //   propsFromAudioparams(
  //     delays.refs[id].delayTime,
  //     "delayTime"
  //   );
  const audioParam =
    props.resolveParam?.("delayTime");
  return (
    <InputsNumber
      name="delayTime"
      title="delay time"
      onUpdate={(value) =>
        onUpdate?.("delayTime", value)
      }
      defaultValue={defaultValue?.(
        "delayTime"
      )}
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
                  audioParam
                  // delays.refs[id]
                  //   .delayTime
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
