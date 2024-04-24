import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { onBrowserLog } from "~/server/generate/browser/on-browser-log";
import {
  renderMedia,
  selectComposition,
  type RenderMediaOptions,
  type SelectCompositionOptions,
} from "@remotion/renderer";
import { isLocal } from "~/server/generate/is-local";
import { bundle } from "@remotion/bundler";
import { webpackOverride } from "~/server/generate/webpack/override";
import path from "path";
import { onProgress } from "~/server/generate/webpack/on-progress";
import { onDownload } from "~/server/generate/media/on-download";
import { REMOTION_ENTRY_POINT } from "~root/remotion.config";
import { TGenerateOutput } from "~/types/trpc/generate";

export type TGenerateProps = {
  input: TPicSeriesProps;
  fps: number;
};
export const generate = async ({
  input,
  fps,
}: TGenerateProps) => {
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

  const durationInFrames =
    fps * input.pics.length;

  const inputProps = {
    ...input,
    fps,
    durationInFrames,
  };
  const compositionOptions: SelectCompositionOptions =
    {
      serveUrl,
      id,
      inputProps,
      logLevel: "verbose",
      onBrowserLog,
      // webpackOverride,
    };

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
  const result: TGenerateOutput =
    await renderMedia(
      renderMediaOption
    );
  return result;
};
