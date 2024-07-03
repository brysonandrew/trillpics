import { FC } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { TGraphSource } from "~/pages/video/music/_context/init/refs/audio/graph/types";
import { useMusicSynthNodesSourcesNode } from "~/pages/video/music/synth/nodes/sources/nodes";
import { useMusicSynthNodesSource } from "~/pages/video/music/synth/nodes/sources/source";
import { resolveSquare } from "@brysonandrew/measure";
import { box } from "~uno/rules/box";
import { IconsTape as AudioIcon } from "~/components/icons/_pismo/Audio";
import { useVideoStyle } from "~/pages/video/style";
import { isOscillator } from "~/utils/music/validation";
import { isNull } from "~/utils/validation/is/null";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { IconsClockwork } from "~/components/icons/_pismo/Clockwork";

export const MusicSynthNodesSources: FC =
  () => {
    const {
      width,
      sidebarWidthOffset,
    } = useVideoStyle();
    const { audio } = useMusicRefs();
    const handleNodes =
      useMusicSynthNodesSourcesNode();
    const handleSource =
      useMusicSynthNodesSource();
    return (
      <>
        {audio.graph.sources.map(
          (
            _source: TGraphSource,
            row: number
          ) => {
            const source =
              handleSource(_source);
            const nodes =
              _source.nodes.map(
                handleNodes
              );
            // console.log(
            //   handleNodes,
            //   handleNodes.preamp
            // );

            // if (isNull(source))
            //   return null;
            console.log(source, nodes);
            const inputs = [
              source,
              ...nodes,
            ] as const;
            console.log(inputs);
            const handleClick = () => {
              if (
                !isNull(source.apm) &&
                isOscillator(source.apm)
              ) {
                if (
                  source.apm.isStarted
                ) {
                  source.apm.end();
                console.log("END");

                  return;
                }
                console.log("START");

                source.apm.start();
                                // source.apm.start();

                source.apm.output.connect(
                  audio.gains.midis
                    .master
                );
                audio.gains.midis.master.connect(
                  audio.gains.master
                );
                audio.gains.master.connect(
                  audio.context
                    .destination
                );
              }
            };
            return (
              <div
                className="row-start"
                key={resolveCompositeKey(
                  row,
                  _source.key
                )}
              >
                <div
                  className="relative left-0 bg-white"
                  style={{
                    ...resolveSquare(
                      box.m2
                    ),
                  }}
                >
                  <button
                    onClick={
                      handleClick
                    }
                  >
                    <AudioIcon />
                    <IconsClockwork />
                  </button>
                </div>
                <div
                  className="relative column-stretch"
                  style={{
                    ...box.p(box.m0125),
                    paddingLeft:
                      sidebarWidthOffset,
                    width:
                      width -
                      sidebarWidthOffset,
                  }}
                >
                  <div>{source.ui}</div>

                  <div>
                    <ul>
                      {nodes.map(
                        (
                          node,
                          column
                        ) => (
                          <li
                            key={resolveCompositeKey(
                              row,
                              column,
                              _source.key
                            )}
                          >
                            {node.ui}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
            // return inputs.map(
            //   ({ apm, ui }, column) => {
            //     const id = `${row}-${column}`;
            //     console.log(id);
            //     return (
            //       <Fragment key={id}>
            //         {form}
            //       </Fragment>
            //     );
            //   }
            // );
          }
        )}
      </>
    );
  };
