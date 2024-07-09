import React from "react";
import { FC, useRef } from "react";
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
        className="relative row"
        style={{
          display:
            source === "oscillator"
              ? "none"
              : "flex",
        }}
      ></div>
      <div
        ref={oscillatorRef}
        className="relative row"
        style={{
          display:
            source === "oscillator"
              ? "flex"
              : "none",
        }}
      >
        {/* <NodesOscillator numbers={{
          defaultValue: undefined,
          resolveParam: undefined,
          onUpdate: undefined
        }} dropdowns={SYNTH_SOURCES} /> */}
      </div>
    </>
  );
};
