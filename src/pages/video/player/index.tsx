import { useEffect } from "react";
import {
  animate,
  motion,
} from "framer-motion";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { Helmet } from "react-helmet-async";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~/constants/box/size";
import { usePicVideoReadInputs } from "~/hooks/pic/video/read/inputs/hook";
import { Download } from "~/pages/video/player/_header/download";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { PlaybackTimer } from "~/components/remotion/player/playback/timer";
import { useContextGrid } from "~/context";
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

  const { dragger } = useContextGrid();

  const s = boxSize();
  useEffect(() => {
    if (containerHeight < 1) return;
    animate<number>(
      dragger.y,
      -containerHeight / 2,
      {
        ease: "easeIn",
        duration: 0.4,
      }
    );
  }, [containerHeight]);
  if (!screen.isDimensions) return null;
  const width =
    screen.container.width - s.m3;

  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Viewing Room
        </title>
      </Helmet>
      <PicBackdrop />
      <div
        className="absolute column-start"
        style={{
          gap: s.m025,
          top:
            screen.container.top +
            s.m15,
          left:
            screen.container.left +
            s.m15,
          width,
        }}
      >
        <div
          className="relative"
          style={{
            width,
            height:
              screen.container
                .playerHeight,
          }}
        >
          <RemotionPlayer
            {...inputProps}
          />
        </div>
        <div
          className="relative inset-0"
          style={{
            top: -60,
            width:
              screen.container.width,
            left: 0,
          }}
        >
          <div
            style={{
              gap: s.m025,
              top: s.m,

              width:
                screen.container.width -
                s.m3,
              left: s.m15,
            }}
          >
       
          
          </div>
        </div>
      </div>
    </>
  );
};
