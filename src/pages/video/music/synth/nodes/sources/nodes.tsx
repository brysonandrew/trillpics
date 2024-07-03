import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { NodesFilter } from "~/pages/video/music/synth/nodes/filter";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import {
  TGraphAudioNode,
  TGraphNode,
} from "~/pages/video/music/_context/init/refs/audio/graph/types";
import {
  TUpdateNodeHandler,
  TUpdateNodeHandlerProps,
} from "~/components/inputs/slider/types";
import { TBiquadFilterNumberOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";
import {
  isBiquadFilterNode,
  isDelayNode,
} from "~/utils/music/validation";

export const useMusicSynthNodesSourcesNode =
  () => {
    const { audio } = useMusicRefs();
    // let audio.gains.midis.preamp =
    //   audio.gains.midis.audio.gains.midis.preamp;

    const handler = (
      _node: TGraphNode,
      index: number
    ) => {
      const node: {
        apm:
          | null
          | DelayNode
          | BiquadFilterNode;
        ui: null | JSX.Element;
      } = { apm: null, ui: null };
      const nextAmp =
        audio.gains.create();

      switch (_node.key) {
        case "delay": {
          node.apm =
            audio.delays.connect(
              nextAmp
            );
          const handleUpdate: TUpdateNodeHandler<
            TDelayNodeKey
          > = (key, ui: number) => {
            if (isDelayNode(node.apm)) {
              node.apm[key].value = ui;
            }
          };
          node.ui = (
            <NodesDelay
              onUpdate={handleUpdate}
            />
          );
          break;
        }
        case "filter": {
          node.apm =
            audio.filters.connect(
              nextAmp
            );

          const numbers = {
            defaultValue: (key) => {
              if (
                !isBiquadFilterNode(
                  node.apm
                )
              )
                return;

              return node.apm[key]
                .value;
            },
            resolveParam: (key) => {
              if (
                !isBiquadFilterNode(
                  node.apm
                )
              )
                return;

              return node.apm[key];
            },
            onUpdate: (key, value) => {
              if (
                !isBiquadFilterNode(
                  node.apm
                )
              )
                return;

              node.apm[key].value =
                value;
            },
          } as TUpdateNodeHandlerProps<TBiquadFilterNumberOptionsKey>;

          const dropdowns = {
            defaultValue: (key) => {
              if (
                !isBiquadFilterNode(
                  node.apm
                )
              )
                return;

              return node.apm[key];
            },
            onUpdate: (key, value) => {
              if (
                !isBiquadFilterNode(
                  node.apm
                )
              )
                return;
              node.apm[key] = value;
            },
          } as TUpdateNodeHandlerProps<
            "type",
            BiquadFilterType
          >;
          node.ui = (
            <NodesFilter
              numbers={numbers}
              dropdowns={dropdowns}
            />
          );

          break;
        }
        default:
          node.ui = null;
      }

      if (node.apm) {
        audio.gains.midis.preamp.connect(node.apm);
        audio.gains.midis.preamp = nextAmp;
      }
      return node;
    };
    return handler
  };
