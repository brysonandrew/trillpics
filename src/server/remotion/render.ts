import { TPicSeriesProps } from "@/remotion/pic-series/types";
import { onBrowserLog } from "@/server/remotion/on-browser-log";
import {
  renderMedia,
  selectComposition,
  type SelectCompositionOptions,
} from "@remotion/renderer";

export const render = async ({
  input,
}: {
  input: TPicSeriesProps;
}) => {
  console.log("INIT");
  const id = "pic-series";
  const serveUrl =
    "https://brysonandrew.github.io/trillpics";
  const inputProps = input;
  console.log(input);

  const options: SelectCompositionOptions =
    {
      serveUrl,
      id,
      inputProps,
      logLevel: "verbose",
      onBrowserLog,
      // onBrowserDownload,
      binariesDirectory: "video/bin/",
    };

  const composition =
    await selectComposition(options);
  console.log("COMP DONE");
  console.log(composition);

  await renderMedia({
    composition,
    serveUrl,
    codec: "h264",
    outputLocation: `./out/render-${id}.mp4`,
    inputProps,
  });
  console.log("RENDER DONE");
};
