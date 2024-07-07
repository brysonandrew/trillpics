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
import { box } from "~uno/rules/box";
import { LinesVertical } from "~/components/lines/vertical";
import { useContextReady } from "~/shell/ready/context";

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
  const {
    screen: { container },
  } = useContextReady();

  const { logs } = useTrillPicsStore(
    ({ logs }) => ({
      logs,
    })
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop =
        ref.current.scrollHeight;
    }
  }, [logs.length]);
  
  return (
    <motion.div
      className="fill flex flex-col items-stretch inset-2 -outline-filter text-white dark:text-black"
      {...PRESENCE_OPACITY}
    >
      <div className="fill rounded-lg _bi-dots opacity-20" />
      <div className="fill rounded-lg _bi-radial opacity-10" />

      <div className="relative flex flex-row h-auto uppercase font-slab">
        <div
          className="hidden text-2xl sm:(flex text-2.5xl) flex-col w-2/3 grow  bg-gray-04"
          style={{
            gap: box._025,
            margin: box._025,
            padding: `0 ${box._}px`
          }}
        >
          <h3
            className="row-space"
            style={{ gap: box._025 }}
          >
            <div>current process</div>
            <b>{stitchStage}</b>
          </h3>
          <h4
            className={clsx(
              "row-space"
            )}
            style={{ gap: box._025 }}
          >
            <div>frames encoded</div>
            <div className="inline-flex flex-row items-center">
              <MonoChars width={20}>
                {String(encodedFrames)}
              </MonoChars>
            </div>
          </h4>
          <h4
            className={clsx(
              "row-space"
            )}
            style={{ gap: box._025 }}
          >
            <div>frames rendered</div>
            <div className="inline-flex flex-row items-center">
              <MonoChars width={20}>
                {String(renderedFrames)}
              </MonoChars>
            </div>
          </h4>
        </div>
        <LinesVertical classValue="hidden sm:flex" />
        <h3
          className="flex flex-col w-full h-full text-left items-start justify-center bg-gray-04 text-2xl sm:(text-2.5xl h-auto w-1/3 items-center justify-center)"
          style={{
            gap: box._025,
            margin: box._025,
          }}
        >
          <div className="whitespace-nowrap">
            generating
          </div>
          <div className="inline-flex flex-row items-center text-4xl sm:text-6xl">
            <MonoChars
              width={
                container.isMobile
                  ? 20
                  : 50
              }
            >
              {(progress * 100).toFixed(
                0
              )}
            </MonoChars>
            <span className="text-3.5xl sm:text-4.5xl pl-4">
              %
            </span>
          </div>
        </h3>
      </div>
      <LinesHorizontal classValue="hidden sm:flex" />
      <div
        ref={ref}
        className="relative hidden md:flex grow h-2/3 overflow-auto bg-gray-04"
        style={{
          margin: box._025,
          paddingLeft: box._05,
          paddingRight: box._05,
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
