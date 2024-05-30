import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { Helmet } from "react-helmet-async";
import { boxSize } from "~/constants/box/size";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { FULLSCREEN_Z } from "~/constants/dom";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import {
  Link,
  useSearchParams,
} from "react-router-dom";
import { VIDEO_ROUTE } from "~/routes";
import { useContextReady } from "~/shell/ready/context";
import { PlayerBackground } from "~/pages/video/player/_background";
import { boxRadius } from "~/constants/box/radius";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { PlaybackButtons } from "~/components/remotion/player/playback/buttons";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer = () => {
  const [searchParams] =
    useSearchParams();
  const { screen } = useContextReady();

  const inputProps =
    usePicVideoReadInputs();

  const s = boxSize();
  const borderRadius = boxRadius();
  const container = screen.container;
  const width = container.width - s.m3;
  const paddingY = screen.container.top;
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
          paddingTop: paddingY + s.m15,
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
          <PlayerBackgroundOpaque />
          <PlayerBackground />
          <RemotionPlayer
            {...inputProps}
            base="remotion"
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
          }}
        >
          <div
            className="relative flex-col flex justify-center"
            style={{
              width:
                container.width - s.m3,
            }}
          >
            <PlaybackButtons />
            <div
              style={{ height: s.m05 }}
            />

            <div
              className="relative w-full"
              style={{
                borderRadius,
                left: 0,
                width:
                  container.width -
                  s.m3,
              }}
            >
              <PlayerBackgroundOpaque />
              <div
                className="absolute inset-0 _gradient-radial"
                style={{
                  borderRadius,
                  left: 0,
                  width:
                    container.width -
                    s.m3,
                }}
              />
              <PlayerBackground />
              <div className="absolute inset-0 bg-black-05 rounded-lg _gradient-mesh opacity-60" />
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
