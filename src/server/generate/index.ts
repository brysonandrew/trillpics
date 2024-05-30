import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import { onBrowserLog } from "~/server/generate/browser/on-browser-log";
import {
  renderMedia,
  selectComposition,
  type RenderMediaOptions,
  type SelectCompositionOptions,
} from "@remotion/renderer";
import { localCheck } from "~/server/generate/is-local";
import { bundle } from "@remotion/bundler";
import { webpackOverride } from "~/server/generate/webpack/override";
import path from "path";
import { onProgress } from "~/server/generate/webpack/on-progress";
import { onDownload } from "~/server/generate/media/on-download";
import { TGenerateOutput } from "~/types/trpc/generate";
import d from "dotenv";
import { REMOTION_ENTRY_POINT } from "~root/remotion.config";
d.config();

export type TGenerateProps =
  TPicSeriesProps;
export const generate = async (
  inputProps: TGenerateProps
) => {
  const id = "pic-series";
  const isLocal = localCheck();

  const serveUrl = isLocal
    ? await bundle({
        publicDir: path.join(
          process.cwd(),
          "./assets/remotion"
        ),
        entryPoint: path.join(
          process.cwd(),
          REMOTION_ENTRY_POINT
        ),
        onProgress:inputProps.onProgress??console.log,
        webpackOverride,
      })
    : "https://brysonandrew.github.io/trillpics";

  const durationInFrames =
    inputProps.fps * inputProps.seconds;
  console.log(inputProps);
  // const inputProps = {
  //   ...input,
  //   fps:input.i,
  //   durationInFrames,
  // };
  // console.log(inputProps, isLocal)
  const compositionOptions: SelectCompositionOptions =
    {
      serveUrl,
      id,
      inputProps,
      logLevel: "verbose",
      onBrowserLog,
      // durationInFrames,
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
