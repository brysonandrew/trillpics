import { FC } from "react";
import { useShallow } from "zustand/react/shallow";
import { useVideoStore } from "@/store";
import { MonoChars } from "@/remotion/player/playback/timer/numbers";

type Props = { frame: number };

export const TimerDisplay: FC<
  Props
> = ({ frame }) => {
  const { fps } = useVideoStore(
    useShallow(({ fps }) => ({
      fps,
    }))
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
    <>
      <span className="flex shrink-0 grow-0 text-left">
        <MonoChars>{m}</MonoChars>:
        <MonoChars>{s}</MonoChars>
      </span>
      <span className="flex shrink-0 grow-0 text-left">
        .<MonoChars>{ms}</MonoChars>
      </span>
    </>
  );
};
