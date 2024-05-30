import { FC } from "react";
import { MonoChars } from "~/components/remotion/player/playback/timer/numbers";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";

type TProps = { frame: number };
export const TimerDisplay: FC<
  TProps
> = ({ frame }) => {
  const { fps } =
    useContextPlayer_Init();
  const totalSeconds = frame / fps;
  const m = String(
    Math.floor(totalSeconds / 60)
  ).padStart(2, "0");
  const s = String(
    Math.floor(totalSeconds % 60)
  ).padStart(2, "0");
  const ms = String(
    Math.ceil(frame * (60 / fps)) % 60
  ).padStart(2, "0");

  return (
    <div className="row">
      <MonoChars>{m}</MonoChars>:
      <MonoChars>{s}</MonoChars>:
      <MonoChars>{ms}</MonoChars>
    </div>
  );
};
