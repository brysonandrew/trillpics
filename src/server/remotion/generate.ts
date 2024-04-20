import { TPicSeriesProps } from "~/remotion/pic-series/types";
import { onBrowserLog } from "~/server/remotion/on-browser-log";
import {
  renderMedia,
  selectComposition,
  type RenderMediaOptions,
} from "@remotion/renderer";
import { isLocal } from "~/server/remotion/is-local";
import { bundle } from "@remotion/bundler";
import { webpackOverride } from "~/server/remotion/webpack-override";
import path from "path";
import { onProgress } from "~/server/remotion/on-progress";
import { onDownload } from "~/server/remotion/on-download";
import { REMOTION_ENTRY_POINT } from "~root/remotion.config";

export type SlowFrame = {
  frame: number;
  time: number;
};
export type TRenderMediaResult = {
  buffer: Buffer | null;
  slowestFrames: SlowFrame[];
};

export type TGenerateConfig = {
  input: TPicSeriesProps;
  fps: number;
};
export const generate = async ({
  input,
  fps,
}: TGenerateConfig) => {
  const id = "pic-series";
  const isLocalMode = isLocal();
  const serveUrl = isLocalMode
    ? await bundle({
        publicDir: path.join(
          process.cwd(),
          "./assets"
        ),
        entryPoint: path.join(
          process.cwd(),
          REMOTION_ENTRY_POINT
        ),
        onProgress,
        webpackOverride,
      })
    : "https://brysonandrew.github.io/trillpics";

  const inputProps = {
    ...input,
    fps,
    durationInFrames:
      fps * input.pics.length,
  };
  console.log(id, serveUrl, input);

  const compositionOptions = {
    serveUrl,
    id,
    inputProps,
    logLevel: "verbose",
    onBrowserLog,
    webpackOverride,
  } as any;

  const composition =
    await selectComposition(
      compositionOptions
    );

  const renderMediaOption: RenderMediaOptions =
    {
      composition,
      serveUrl,
      codec: "h264",
      onDownload,
      inputProps,
      logLevel: "verbose",
    };
  const result: TRenderMediaResult =
    await renderMedia(
      renderMediaOption
    );
  return result;
};
