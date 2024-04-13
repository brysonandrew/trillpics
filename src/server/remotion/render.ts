import { TPicSeriesProps } from "@/remotion/pic-series/types";
import { onBrowserLog } from "@/server/remotion/on-browser-log";
import { onBrowserDownload } from "@/server/remotion/on-browser-download";
import {
  renderMedia,
  selectComposition,
  type RenderMediaOptions,
  openBrowser,
  ensureBrowser,
  type EnsureBrowserOptions,
} from "@remotion/renderer";

export const render = async ({
  input,
  fps,
}: {
  input: TPicSeriesProps;

  fps: number;
}) => {
  console.log("INIT");
  const id = "pic-series";
  const serveUrl =
    "https://brysonandrew.github.io/trillpics";
  const inputProps = {
    ...input,
    fps,
    durationInFrames:
      fps * input.pics.length,
  };
  console.log(input);
  const resolveAssets = (
    path: string
  ) =>
    process.env.NETLIFY_LOCAL
      ? `assets/${path}`
      : path;
  // const browserExecutable =
  //   resolveAssets("video/bin/Chromium");
  const openBrowserOptions = {onBrowserDownload,shouldDumpIo:true};
  console.log("PUPPETEER - OPEN BROWSER");
  const puppeteerInstance =
    await openBrowser(
      "chrome",
      openBrowserOptions
    );
  const options: EnsureBrowserOptions =
    {
      onBrowserDownload,
    };
  console.log("ENSURE BROWSER");

  await ensureBrowser(options);

  const compositionOptions = {
    serveUrl,
    id,
    inputProps,
    logLevel: "verbose",
    onBrowserLog,
    puppeteerInstance,
    onBrowserDownload,
    binariesDirectory: resolveAssets(
      "video/bin/"
    ),
  } as any;
  console.log("COMPOSITION");

  const composition =
    await selectComposition(
      compositionOptions
    );
  console.log("COMPOSITION DONE");
  console.log(composition);
  console.log("RENDER");

  const renderMediaOption: RenderMediaOptions =
    {
      composition,
      serveUrl,
      codec: "h264",
      outputLocation: `./out/render--${id}.mp4`,
      inputProps,
    };

  await renderMedia(renderMediaOption);

  console.log("RENDER DONE");
};
