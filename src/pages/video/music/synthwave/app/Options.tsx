import { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { SelectStyled } from "~/components/inputs/select/styled";
import {
  TUpdateSliderHandler,
  UiInputsSliderRow,
} from "~/components/inputs/slider/row";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicBackground } from "~/pages/video/music/background";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { useSynthwaveContext } from "~/pages/video/music/synthwave/state/Context";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";

export const SynthwaveOptions: FC =
  () => {
    const { options, multi, dispatch } =
      useSynthwaveContext();
    const s = boxSize();
    const handleUpdate: TUpdateSliderHandler =
      (name: string, value: any) => {
        const [key, key1] =
          name.split(".");
        const resolveValue = () => {
          switch (key1) {
            case "type": {
              return value;
            }
            default: {
              return +value;
            }
          }
        };
        dispatch({
          type: `update-${
            key as "multi" | "options"
          }`,
          value: {
            [key1]: resolveValue(),
          },
        });
      };

    const borderRadius = boxRadius();
    const playMidis = usePlayMidis();
    const {
      playerStyle,
      sidebarWidthOffset,
      y,
      gap,
      left,
      width,
    } = useVideoPlayerStyle();

    return (
      <>
        <div
          className="relative row-space grow"
          style={{
            gap: s.m0125 / 4,
            paddingRight: s.m05,
            width,
          }}
        >
          <MusicBackground
            boxStyle={{
              left: sidebarWidthOffset,
            }}
            style={{
              // paddingLeft:left*1.5,

              borderTopRightRadius:
                borderRadius,
            }}
          />
          <MusicLayoutHeader
            onClick={() =>
              playMidis.play()
            }
          >
            Synth
          </MusicLayoutHeader>
          <LinesHorizontal opacityClass="opacity-20" />
          <SelectStyled
            name="options.type"
            title="type"
            value={options.type}
            values={
              WRITABLE_OSCILLATOR_TYPES
            }
            onValueChange={(value) =>
              handleUpdate(
                "options.type",
                value
              )
            }
          />
        </div>
        <UiInputsSliderRow
          name="options.midi"
          title="midi"
          min={0}
          max={100}
          step={1}
          value={options.midi}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.detune"
          title="detune"
          value={options.detune}
          min={-2400}
          max={2400}
          step={10}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.gain"
          title="gain"
          value={options.gain}
          min={0}
          max={2}
          step={0.1}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.attack"
          title="attack"
          value={options.attack}
          min={0}
          max={10}
          step={0.1}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.decay"
          title="decay"
          value={options.decay}
          min={0}
          max={10}
          step={0.1}
          onUpdate={handleUpdate}
        />

        <UiInputsSliderRow
          name="options.delay"
          title="delay"
          value={options.delay}
          min={0}
          max={6}
          step={0.1}
          onUpdate={handleUpdate}
        />

        {/* <div
          className="relative column-stretch"
          style={{ gap: s.m025 }}
        > */}
        <UiInputsSliderRow
          name="multi.spread"
          title="spread"
          value={multi.spread}
          min={0}
          max={400}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="multi.count"
          title="count"
          value={multi.count}
          min={1}
          max={400}
          step={1}
          onUpdate={handleUpdate}
        />
        <UiInputsSliderRow
          name="multi.stagger"
          title="stagger"
          value={multi.stagger}
          min={0}
          max={5}
          step={0.01}
          onUpdate={handleUpdate}
        />
        {/* </div> */}
      </>
    );
  };
