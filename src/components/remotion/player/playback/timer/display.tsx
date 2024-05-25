import { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { MonoChars } from "~/components/remotion/player/playback/timer/numbers";

type TProps = { frame: number };
export const TimerDisplay: FC<
  TProps
> = ({ frame }) => {
  const { fps } = useTrillPicsStore(
    ({ fps }) => ({ fps })
  );
  const totalSeconds = frame / fps;
  const m = String(
    Math.floor(totalSeconds / 60)
  ).padStart(2, "0");
  const s = String(
    Math.floor(totalSeconds % 60)
  ).padStart(2, "0");
  const ms = String(
    Math.floor(frame * (60 / fps)) % 60
  ).padStart(2, "0");

  return (
    <div className="row">
      <MonoChars>{m}</MonoChars>:
      <MonoChars>{s}</MonoChars>.
      <MonoChars>{ms}</MonoChars>
    </div>
  );
};
