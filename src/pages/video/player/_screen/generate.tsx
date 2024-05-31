import {
  FC,
  useEffect,
  useRef,
} from "react";
import { motion } from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import clsx from "clsx";
import { TGenerateProgressData } from "~/store/state/generate/types";
import { MonoChars } from "~/pages/video/player/_controls/playback/timer/numbers";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { boxSize } from "~/constants/box/size";
import { LinesVertical } from "~/components/lines/vertical";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer_ScreenGenerate: FC<
  TGenerateProgressData
> = (props = {} as any) => {
  const {
    stitchStage,
    encodedFrames,
    encodedDoneIn,
    renderedFrames,
    renderedDoneIn,
    progress,
  } = props;
  const ref =
    useRef<HTMLDivElement | null>(null);

  const { logs } =
    useTrillPicsStore(
      ({
        progress,
        logs,
        download,
      }) => ({
        progress,
        logs,
        download,
      })
    );

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop =
        ref.current.scrollHeight;
    }
  }, [logs.length]);
  const s = boxSize();
  return (
    <motion.div
      className="fill flex flex-col items-stretch inset-2 -outline-filter text-white dark:text-black"
      {...PRESENCE_OPACITY}
    >
      <div className="fill rounded-lg _box-dots opacity-20" />
      <div className="fill rounded-lg _gradient-radial opacity-10" />
     
      <div className="flex flex-row h-auto uppercase font-slab">
        <div
          className="hidden xl:flex flex-col w-2/3 grow text-2.5xl bg-gray-04"
          style={{     gap: s.m025,
            margin: s.m025,
            padding: s.m, }}
        >
          <h3
            className="row-space"
            style={{ gap: s.m025 }}
          >
            <div>current process</div>
            <b>{stitchStage}</b>
          </h3>
          <h4
            className={clsx("row-space")}
            style={{ gap: s.m025 }}
          >
            <div>frames encoded</div>
            <div className="inline-flex flex-row items-center">
              <MonoChars width={20}>
                {String(encodedFrames)}
              </MonoChars>
            </div>
          </h4>
          <h4
            className={clsx("row-space")}
            style={{ gap: s.m025 }}
          >
            <div>frames rendered</div>
            <div className="inline-flex flex-row items-center">
              <MonoChars width={20}>
                {String(renderedFrames)}
              </MonoChars>
            </div>
          </h4>
        </div>
        <LinesVertical classValue="hidden xl:flex" />
        <h3
          className="w-full center h-full text-left items-start flex flex-col text-3xl bg-gray-04 xl:(text-right h-auto items-center w-1/3)"
          style={{
            gap: s.m025,
              margin: s.m025,
          }}
        >
          <div className="whitespace-nowrap">
            generating
          </div>
          <div className="inline-flex flex-row items-center text-6xl">
            <MonoChars width={50}>
              {(progress * 100).toFixed(
                0
              )}
            </MonoChars>
            <span className="text-4.5xl pl-4">
              %
            </span>
          </div>
        </h3>
      </div>
      <LinesHorizontal classValue="hidden xl:flex" />
      <div
        ref={ref}
        className="hidden xl:flex grow h-2/3 overflow-auto bg-gray-04"
        style={{
          margin: s.m025,
          paddingLeft: s.m05,
          paddingRight: s.m05,
        }}
      >
        <ul>
          {logs.map((log, index) => (
            <li
              key={`${index}`}
              className="font-slab"
            >
              {log.type === "warning"
                ? "⚠ "
                : ""}
              {log.text}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
