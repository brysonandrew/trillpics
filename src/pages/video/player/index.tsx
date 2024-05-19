import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { RemotionPlayer } from "~/components/remotion/player";
import { useContextGrid } from "~/context";
import { createPortal } from "react-dom";
import { PlaybackButtonsBackward } from "~/components/remotion/player/playback/buttons/backward";
import { PlaybackButtonsForward } from "~/components/remotion/player/playback/buttons/forward";
import { PlaybackProgressSeeker } from "~/components/remotion/player/playback/progress/seeker";
import { PlayerPlayback } from "~/components/remotion/player/playback";
import { Helmet } from "react-helmet-async";

export const VideoPlayer = () => {
  const {
    footerValue,
    headerValue,
    centerValue,
  } = useContextGrid();

  return (
    <>
      <Helmet>
        <title>Trill Pics | Viewing Room</title>
      </Helmet>
      {headerValue &&
        createPortal(
          <PlayerPlayback />,
          headerValue
        )}
      {centerValue &&
        createPortal(
          <>
            <PicBackdrop />
            <div className="absolute left-1/2 top-1/2 -translate-1/2">
              <RemotionPlayer />
            </div>
          </>,
          centerValue
        )}
      {footerValue &&
        createPortal(
          <>
            {true ? (
              <>
                <PlaybackButtonsBackward />
                <PlaybackProgressSeeker />
                <PlaybackButtonsForward />
              </>
            ) : null}
          </>,
          footerValue
        )}
    </>
  );
};
