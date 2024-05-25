import { useEffect } from "react";
import { animate } from "framer-motion";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { Helmet } from "react-helmet-async";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~/constants/box/size";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { useContextGrid } from "~/context";
import { FULLSCREEN_Z } from "~/constants/dom";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { Download } from "~/pages/video/player/_header/download";
import { ControlsPlayer } from "~/pics/hud/left/player";
import { Seperator } from "~/pages/video/_common/footer/left/seperator";
import { PlaybackButtonsFullscreen } from "~/components/remotion/player/playback/buttons/fullscreen";
import { FullScreenToggle } from "~root/build/612.bundle";
import { GRADIENT_BLUE_PINK_YELLOW } from "~app/color/gradient";
export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer = () => {
  const { screen } = useTrillPicsStore(
    ({ screen }) => ({
      screen,
    })
  );
  const containerHeight =
    screen.isDimensions
      ? screen.container.height
      : 0;
  const inputProps =
    usePicVideoReadInputs();

  const {
    ref,
    dragger,
    foundationValue,
  } = useContextGrid();

  const s = boxSize();
  useEffect(() => {
    ref.current?.disableScroll();

    if (containerHeight < 1) return;
    animate<number>(
      dragger.y,
      -containerHeight / 2,
      {
        ease: "easeIn",
        duration: 0.4,
      }
    );

    return () => {
      ref.current?.enableScroll();
    };
  }, [containerHeight]);
  if (!screen.isDimensions) return null;
  const width =
    screen.container.width - s.m3;
  const dimensions = screen.container;
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Viewing Room
        </title>
      </Helmet>
      <PicBackdrop />
      <div
        className="absolute column-start items-stretch h-full"
        style={{
          gap: s.m05,
          top:
            screen.container.top +
            s.m15,
          left:
            screen.container.left +
            s.m15,
          width,
          height:
            containerHeight -
            (foundationValue?.height ??
              0),
          zIndex: FULLSCREEN_Z,
        }}
      >
        <div
          className="relative"
          style={{
            width,
            height: width * (9 / 16),
          }}
        >
          <div className="absolute -inset-2 bg-black rounded-lg opacity-20" />
          <RemotionPlayer
            {...inputProps}
          />
        </div>
        <div
          style={{
            gap: s.m025,
            width:
              screen.container.width -
              s.m3,
            left: s.m15,
          }}
        >
          <div
            className="relative flex-col flex justify-center"
            style={{
              left: 0,
              top: 0,
              width:
                screen.container.width -
                s.m3,
            }}
          >
            <div className="relative row-space">
              <div className="absolute -inset-2 bg-black rounded-lg  _gradient-mesh opacity-20" />

              <div className="relative row gap-3">
                <PlaybackButtons />
                <PlaybackTimer />
              </div>

              <PlaybackButtonsFullscreen />
            </div>
            <div
              style={{ height: s.m05 }}
            />
            <div
              className="relative w-full _gradient-radial"
              style={{
                left: 0,
                width:
                  screen.container
                    .width - s.m3,
              }}
            >
                            <div className="absolute -inset-2 bg-black rounded-lg  _gradient-mesh opacity-20" />

              <PlaybackProgressSeeker />
            </div>
          </div>
        </div>
        {/* <Download direction="rtl" /> */}
      </div>
    </>
  );
};
