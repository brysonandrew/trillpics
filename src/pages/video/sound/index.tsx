import { Helmet } from "react-helmet-async";
import { GridOptions } from "~/pics/hud/left/grid-options";
import { IconsPlus } from "~/components/icons/plus";
import { useLoop } from "~/hooks/sound/koolasuchas/useLoop";
import { useSoundContext } from "~/shell/global/sound";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { useReadyContext } from "~/shell/ready/context";
import { boxSize } from "~uno/rules/box/size";

export const VideoSound = () => {
  const { play, stop: stopLoop } =
    useLoop();
  const {
    stop,
    start,
    sound,
    context,
    audioUrl,
  } = useSoundContext();
  console.log(audioUrl)
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
   
      <footer
        className="absolute row"
        style={{
          top: container.height - s.m2,
          left:
            container.width / 2 -
            s.m05 -
            s.m025,
          height: s.m025 / 2,
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
        <GridOptions />
      </footer>
    </>
  );
};
