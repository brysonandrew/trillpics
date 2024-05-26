import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { Helmet } from "react-helmet-async";
import { boxSize } from "~/constants/box/size";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { FULLSCREEN_Z } from "~/constants/dom";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { Download } from "~/pages/video/player/_header/download";
import { PlaybackButtonsFullscreen } from "~/components/remotion/player/playback/buttons/fullscreen";
import {
  Link,
  useSearchParams,
} from "react-router-dom";
import { VIDEO_ROUTE } from "~/shell/routes";
import { useContextGrid } from "~/context";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer = () => {
  const [searchParams] =
    useSearchParams();
  const { screen } = useContextGrid();

  const inputProps =
    usePicVideoReadInputs();

  const s = boxSize();
  const container = screen.container;
  const width = container.width - s.m3;
  const paddingY =
    screen.container.top;
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Viewing Room
        </title>
      </Helmet>
      <Link
        className="fill"
        to={`${VIDEO_ROUTE}?${searchParams}`}
      >
        <PicBackdrop />
      </Link>
      <div
        className="fill overflow-auto"
        style={{
          zIndex: FULLSCREEN_Z,
          paddingTop: paddingY+s.m15,
             paddingLeft:
              screen.container.left +
              s.m15,
          paddingBottom: paddingY,
          // paddingLeft:
          // screen.container.left +
          // s.m15,
          gap: s.m,
        }}
      >
        <div
          className="relative"
          style={{
            gap: s.m05,
         
            width,
            height: width * (9 / 16),
          }}
        >
          <div className="absolute -inset-2 bg-black rounded-lg opacity-70" />
          <RemotionPlayer
            {...inputProps}
          />
        </div>
        <div
          style={{ height: s.m05 }}
        />
        <div
          className="relative flex-col flex justify-center"
          style={{
            gap: s.m025,
            width:
              container.width - s.m3,
            // left: s.m15,
            // height:container.height,
          }}
        >
          <div
            className="relative flex-col flex justify-center"
            style={{
              // left: 0,
              // top: 0,
              // height:container.height,

              width:
                container.width - s.m3,
            }}
          >
            <div className="relative row-space">
              <div className="absolute -inset-2 bg-black rounded-lg  _gradient-mesh opacity-70" />

              <div className="relative row gap-6">
                <PlaybackButtons />
                <PlaybackTimer />
              </div>
              <div className="relative flex gap-2">
                <PlaybackButtonsFullscreen direction="rtl" />
                <Download direction="rtl" />
              </div>
            </div>
            <div
              style={{ height: s.m05 }}
            />
            <div
              className="relative w-full _gradient-radial rounded-lg"
              style={{
                left: 0,
                width:
                  container.width -
                  s.m3,
              }}
            >
              <div className="absolute -inset-2 bg-black rounded-lg _gradient-mesh opacity-80" />
              <PlaybackProgressSeeker />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ height: paddingY }}
      />
    </>
  );
};
