import { Helmet } from "react-helmet-async";
import { GridOptions } from "~/pics/hud/left/grid-options";
import { IconsPlus } from "~/components/icons/plus";
import { useLoop } from "~/hooks/sound/koolasuchas/useLoop";
import { useSoundContext } from "~/shell/global/sound";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useReadyContext } from "~/shell/ready/context";
import { boxSize } from "~uno/rules/box/size";
import { SoundSequencer } from "~/pages/video/music/sequencer";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";

export const VideoMusic = () => {
  const { play, stop: stopLoop } =
    useLoop();
  const {
    stop,
    start,
    sound,
    context,
    audioUrl,
  } = useSoundContext();
  const {
    playerStyle,
    screenHeight,
    y,
    gap,
  } = useVideoPlayerStyle();
  console.log(audioUrl);
  const {
    screen: { container },
    main,
  } = useReadyContext();
  //   const mediaElement = useRef(new Audio())
  //   const streamSource  = context.createMediaStreamSource(sound.destination.stream);
  //   const srcObject = context.createMediaElementSource(mediaElement.current)
  //   const recordedBlob = new Blob(sound.chunks, { type: "video/webm" });
  //  const src = URL.createObjectURL(recordedBlob);
  const s = boxSize();
  const handleClick = () => {
    console.log(sound.recorder.state);
    if (
      sound.recorder.state ===
      "recording"
    ) {
      console.log("STOP");
      stopLoop();
      stop();
    } else {
      play();
      start();
    }
  };

  const title = "Add music";
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Music Sequencer
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        className="fill column-start justify-center lg:justify-start overflow-auto"
        style={{
          paddingTop: y,
          paddingBottom: y,
          gap,
        }}
      >
        <div
          className="relative"
          style={{
            ...playerStyle,
          }}
        >
          <PlayerBackgroundOpaque />
          <PlayerBackground />
          <SoundSequencer />
        </div>
        <footer
          className="relative flex-col flex justify-center"
          style={{
            ...playerStyle,
          }}
        >
          {audioUrl && (
            <audio
              src={audioUrl}
              controls
            />
          )}
          <PillBHover
            title={title}
            Icon={IconsPlus}
            onClick={handleClick}
          >
            {title}
          </PillBHover>
        </footer>
      </div>
    </>
  );
};
