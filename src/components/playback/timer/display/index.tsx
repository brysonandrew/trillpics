import { FC } from "react";
import { MonoChars } from "~/pages/video/player/_controls/playback/timer/numbers";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import clsx from "clsx";

export type TTimerDisplayProps = {
  elapsed: number;
  unit: "frames" | "seconds";
};
export const TimerDisplay: FC<
  TTimerDisplayProps
> = ({ elapsed, unit }) => {
  const { fps } =
    useContextPlayer_Init();

  const totalFrames =
    unit === "frames"
      ? elapsed
      : elapsed * fps;

  const totalSeconds =
    unit === "seconds"
      ? elapsed
      : elapsed / fps;

  const m = String(
    Math.floor(totalSeconds / 60)
  ).padStart(2, "0");
  const s = String(
    Math.floor(totalSeconds % 60)
  ).padStart(2, "0");
  const ms = String(
    Math.ceil(
      totalFrames * (60 / fps)
    ) % 60
  ).padStart(2, "0");

  return (
    <div
      className={clsx(
        "row",
        "font-slab text-left text-sm text-white dark:text-gray"
      )}
    >
      <MonoChars>{m}</MonoChars>:
      <MonoChars>{s}</MonoChars>:
      <MonoChars>{ms}</MonoChars>
    </div>
  );
};
