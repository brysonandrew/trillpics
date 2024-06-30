import {
  FC,
  useEffect,
  useRef,
} from "react";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator";
import { NodesKarplusStrong } from "~/pages/video/music/synth/nodes/worklets/karplus-strong";
import { SynthSource } from "~/pages/video/music/synth/source";
import { TSynthSourceKey } from "~/pages/video/music/synth/source/constants";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const NodesSource: FC = () => {
  const { schedule } = useMusicRefs();
  const {
    record: {
      synth: { source },
    },
  } = schedule;
  const stringRef =
    useRef<HTMLDivElement | null>(null);
  const oscillatorRef =
    useRef<HTMLDivElement | null>(null);



  const handleValueChange = (
    key: TSynthSourceKey
  ) => {

    schedule.record.synth.source = key;
    if (
      !stringRef.current ||
      !oscillatorRef.current
    )
      return;
    if (key === "oscillator") {
      stringRef.current.style.display =
        "none";
      oscillatorRef.current.style.display =
        "flex";
      return;
    }
    stringRef.current.style.display =
      "flex";
    oscillatorRef.current.style.display =
      "none";
  };

  return (
    <>
      <div
        ref={stringRef}
        className="relative column-stretch"
        style={{
          display:
            source === "oscillator"
              ? "none"
              : "flex",
        }}
      >
        <NodesKarplusStrong
          title={
            <SynthSource
              onUpdate={
                handleValueChange
              }
            />
          }
        />
      </div>
      <div
        ref={oscillatorRef}
        className="relative column-stretch"
        style={{
          display:
            source === "oscillator"
              ? "flex"
              : "none",
        }}
      >
        <NodesOscillator
          title={
            <SynthSource
              onUpdate={
                handleValueChange
              }
            />
          }
        />
      </div>
    </>
  );
};
