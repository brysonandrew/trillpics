import { FC } from "react";
import { NodesDelay } from "~/pages/video/music/synth/nodes/delay";
import { NodesFilter } from "~/pages/video/music/synth/nodes/filter";
import { box } from "~uno/rules/box";
import { NodesSource } from "~/pages/video/music/synth/nodes/source";
import { useVideoStyle } from "~/pages/video/style";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { TGraphSource, TGraphNode, TGraphAudioNode } from "~/pages/video/music/_context/init/refs/audio/graph/types";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { NodesKarplusStrong } from "~/pages/video/music/synth/nodes/worklets/karplus-strong";
import { IdProvider } from "~/pages/video/music/_context/init/refs/audio/id";
import { isNull } from "~/utils/validation/is/null";
import { TUpdateNodeHandler, TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { TKarplusStrongOptionsKey } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";
import { TBiquadFilterNumberOptionsKey } from "~/pages/video/music/synth/nodes/filter/types";
import { TDelayNodeKey } from "~/pages/video/music/synth/nodes/delay/types";

export const MusicSynthNodes: FC =
  () => {
    const {
      width,
      sidebarWidthOffset,
    } = useVideoStyle();
    const { audio } = useMusicRefs();
    return (
      <div
        className="relative column-stretch w-full"
        style={{
          left: sidebarWidthOffset,
          width:
            width - sidebarWidthOffset,
          ...box.p(box.m0125),
        }}
        ref={audio.graph.ref}
      >
        <NodesSource />
        {audio.graph.sources.map(
          (
            _source: TGraphSource,
            row: number
          ) => {
            const forms: JSX.Element[] =
              [];
            let prevAmp: GainNode =
              audio.gains.create();
            const nodes: TGraphAudioNode[] =
              [];

            _source.nodes.forEach(
              (_node: TGraphNode) => {
                const nextAmp =
                  audio.gains.create();

                let instance: DelayNode | null =
                  null;
                let next: JSX.Element | null =
                  null;
                switch (_node.key) {
                  case "delay": {
                    instance =
                      audio.delays.connect(
                        nextAmp
                      );
                    const handleUpdate: TUpdateNodeHandler<
                      TDelayNodeKey
                    > = (
                      key,
                      next: number
                    ) => {
                      if (!instance)
                        return;
                      instance[
                        key
                      ].value = next;
                    };
                    next = (
                      <NodesDelay
                        onUpdate={
                          handleUpdate
                        }
                      />
                    );
                    break;
                  }
                  case "filter": {
                    const instance =
                      audio.filters.connect(
                        nextAmp
                      ) as BiquadFilterNode;

                    if (!instance)
                      return;
                    const numbers = {
                      defaultValue: (
                        key
                      ) => {
                        if (!instance)
                          return;

                        return instance[
                          key
                        ].value;
                      },
                      resolveParam: (
                        key
                      ) => {
                        if (!instance)
                          return;

                        return instance[
                          key
                        ];
                      },
                      onUpdate: (
                        key,
                        value
                      ) => {
                        if (!instance)
                          return;

                        instance[
                          key
                        ].value = value;
                      },
                    } as TUpdateNodeHandlerProps<TBiquadFilterNumberOptionsKey>;

                    const dropdowns = {
                      defaultValue: (
                        key
                      ) => {
                        if (!instance)
                          return;

                        return instance[
                          key
                        ];
                      },
                      onUpdate: (
                        key,
                        value
                      ) => {
                        if (!instance)
                          return;
                        instance[key] =
                          value;
                      },
                    } as TUpdateNodeHandlerProps<
                      "type",
                      BiquadFilterType
                    >;
                    next = (
                      <NodesFilter
                        numbers={
                          numbers
                        }
                        dropdowns={
                          dropdowns
                        }
                      />
                    );
                    break;
                  }
                  default:
                    next = null;
                }

                if (next) {
                  forms.push(next);
                }
                if (instance) {
                  prevAmp.connect(
                    instance
                  );
                  prevAmp = nextAmp;
                  nodes.push(instance);
                }
              }
            );
            let source: JSX.Element | null =
              null;

            switch (_source.key) {
              case "oscillator": {
                const instance =
                  audio.oscillators.connect(
                    prevAmp
                  );

                source = (
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
                      defaultValue: (
                        key
                      ) => {
                        return instance
                          .node[key]
                          .value;
                      },
                      resolveParam: (
                        key
                      ) => {
                        return instance
                          .node[key];
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
              }
              case "strings": {
                // const instance =
                //   audio.karpluses.connect(
                //     prevAmp
                //   );
                // const handleUpdate = (
                //   name: TKarplusStrongOptionsKey,
                //   value: number
                // ) => {
                //   const next =
                //     Number(value);
                //   if (isNull(instance))
                //     return;
                //   instance.node.parameters.get(
                //     name
                //   ).value = next;
                // };
                // source = (
                //   <NodesKarplusStrong
                //     onUpdate={
                //       handleUpdate
                //     }
                //     defaultValue={(
                //       name
                //     ) =>
                //       instance.node.parameters.get(
                //         name
                //       ).value
                //     }
                //   />
                // );
                break;
              }
              default:
                null;
            }

            if (isNull(source))
              return null;


console.log(source,forms)
            return null;

            return [
              source,
              ...forms,
            ].map((form, column) => {
              const id = `${row}-${column}`;

              return (
                <IdProvider id={id}>
                  {form}
                </IdProvider>
              );
            });
          }
        )}
      </div>
    );
  };
