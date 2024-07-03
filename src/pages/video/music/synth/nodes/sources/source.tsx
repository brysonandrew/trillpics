import { useMusicRefs } from "~/pages/video/music/_context/init";
import { TGraphSource } from "~/pages/video/music/_context/init/refs/audio/graph/types";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { NodesKarplusStrong } from "~/pages/video/music/synth/nodes/worklets/karplus-strong";
import { isNull } from "~/utils/validation/is/null";
import { TKarplusStrongOptionsKey } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
import { KARPLUS_STRONG_KEY } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/numbers";
import {
  NOISE_PINK_KEY,
  NOISE_WHITE_KEY,
} from "~/pages/video/music/_context/init/refs/audio/noises";
import { TKarplus } from "~/pages/video/music/_context/init/refs/audio/karpluses/types";
import { TOscillator } from "~/pages/video/music/_context/init/refs/audio/oscillators/types";
export const useMusicSynthNodesSource =
  () => {
    const { audio } = useMusicRefs();

    const handler = (
      _source: TGraphSource
    ) => {
      const source: {
        apm:
          | null
          | TKarplus
          | TOscillator;
        ui: null | JSX.Element;
      } = { apm: null, ui: null };
      switch (_source.key) {
        case "oscillator": {
          const instance =
            audio.oscillators.connect(
              audio.gains.midis.master,
              _source.options as any
            );

          instance.start();

          source.ui = (
            <NodesOscillator
              numbers={{
                onUpdate: (
                  key,
                  value
                ) => {
                  instance.node[
                    key
                  ].value = value;
                },
                defaultValue: (key) => {
                  return instance.node[
                    key
                  ].value;
                },
                resolveParam: (key) => {
                  return instance.node[
                    key
                  ];
                },
              }}
              dropdowns={{
                onValueChange: (
                  value: OscillatorType
                ) => {
                  instance.node.type =
                    value;
                },
              }}
            />
          );

          source.apm = instance;
          break;
        }

        case KARPLUS_STRONG_KEY: {
          if (
            !audio.worklets[
              NOISE_PINK_KEY
            ] ||
            !audio.worklets[
              NOISE_WHITE_KEY
            ] ||
            !audio.worklets[
              KARPLUS_STRONG_KEY
            ]
          ) {
            console.log(
              "karplus delayed ",
              audio.worklets
            );
            break;
          }

          const instance =
            audio.karpluses.connect(
              audio.gains.midis.preamp
            );
          const handleUpdate = (
            name: TKarplusStrongOptionsKey,
            value: number
          ) => {
            const next = Number(value);
            if (isNull(instance))
              return;
            instance.node.parameters.get(
              name
            ).value = next;
          };
          source.ui = (
            <NodesKarplusStrong
              onUpdate={handleUpdate}
              defaultValue={(name) =>
                instance.node.parameters.get(
                  name
                ).value
              }
            />
          );

          source.apm = instance;

          break;
        }
        default:
          null;
      }

      return source;
    };
    return handler;
  };
