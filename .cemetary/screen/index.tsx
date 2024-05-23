import { FC } from "react";
import { useTrillPicsStore } from "src/store";
import { ControlsPlayer } from "~/pages/directors-mode/footer/player";
import { ControlsShow } from "~/pages/directors-mode/footer/controls/show";
import { ControlsClear } from "~/pages/directors-mode/footer/controls/clear";
import { withControlsCheck } from "~/store/hocs/with-controls-check";

export const DirectorsModeScreen: FC =
  withControlsCheck(() => {
    const { videoPics } =
      useTrillPicsStore(
        ({ videoPics }) => ({
          videoPics,
        })
      );
    const isVideoPicsCount =
      videoPics.length > 0;
    return (
      <>
        {/* <div className="absolute bottom-1/2 left-0 w-screen h-[1px] bg-transparent">
                <div className="absolute bottom-0 h-0 left-1/2 -translate-1/2 container">
                  <div className="absolute -translate-y-1/2 left-0 top-0 w-0">
                    <ControlsShuffle />
                  </div>
                </div>
              </div> */}
        {isVideoPicsCount && (
          <div className="absolute top-0 w-screen h-0 bg-transparent">
            <div className="absolute top-0 h-0 left-1/2 -translate-x-1/2 container">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 column-start gap-4">
                <ControlsClear />
                <ControlsShow />
                <ControlsPlayer />
                <div className="relative h-10 w-10 center"></div>
                {/* <div className="absolute w-0 h-0 left-0 bottom-3/4">
                      <div className="absolute bottom-8 left-0 h-0 center">
                      </div>
                      <div className="absolute top-8 left-0 center">
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        )}
      </>
    );
  });
