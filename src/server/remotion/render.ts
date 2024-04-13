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
import { resolveAssets } from "@/server/remotion/resolve-assets";
import { getLocalBrowserExecutable } from "@/server/remotion/browser-executable/get-local-browser-executable";
import * as os from "node:os";
import * as fs from "node:fs";
import * as path from "node:path";


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

  // const browserExecutable =
  //   resolveAssets("video/bin/Chromium");
  // const downloadURL = getChromeDownloadUrl({platform, version});
  const browserExecutable =
    getLocalBrowserExecutable(null);
  // const executablePath =
  // getExecutablePath();
  console.log(browserExecutable);
  // resolveAssets(
  //   "chrome-headless-shell/mac_arm-123.0.6312.122/chrome-headless-shell-mac-arm64/chrome-headless-shell"
  // );
  const openBrowserOptions = {
    onBrowserDownload,
    shouldDumpIo: true,
    browserExecutable: null,
  };
  console.log(
    "PUPPETEER - OPEN BROWSER"
  );
  const puppeteerInstance =
    await openBrowser(
      "chrome",
      openBrowserOptions
    );
  const options: EnsureBrowserOptions =
    {
      onBrowserDownload,
      browserExecutable: null,
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
