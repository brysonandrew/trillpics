import { TPicSeriesProps } from "@/remotion/pic-series/types";
import { onBrowserLog } from "@/server/remotion/on-browser-log";
import {
  renderMedia,
  selectComposition,
  type RenderMediaOptions,
} from "@remotion/renderer";
import { resolveAssets } from "@/server/remotion/resolve-assets";
import { isDev } from "@/server/remotion/is-dev";
import { bundle } from "@remotion/bundler";
import { webpackOverride } from "@/server/remotion/webpack-override";
import path from "path";
import { onProgress } from "@/server/remotion/on-progress";
import { REMOTION_ENTRY_POINT } from "../../../remotion.config";

export const render = async ({
  input,
  fps,
}: {
  input: TPicSeriesProps;
  fps: number;
}) => {
  console.log("INIT");
  const id = "pic-series";
  const isDevMode = isDev();
  console.log("IS DEV", isDevMode);
  const serveUrl = isDevMode
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
  console.log("serveUrl", serveUrl);

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
    // puppeteerInstance,
    // onBrowserDownload,
    binariesDirectory: resolveAssets(
      "remotion/bin/"
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
  console.log(renderMediaOption);
  console.log("RENDER");
  await renderMedia(renderMediaOption);

  console.log("RENDER DONE");
};

// const browserExecutable =
//   resolveAssets("remotion/bin/Chromium");
// const downloadURL = getChromeDownloadUrl({platform, version});
// const revisionInfo =
//   await getLocalBrowserExecutable();
// const executablePath =
// getExecutablePath();
// console.log("REVISION");
// console.log(revisionInfo);
// const browserExecutable = revisionInfo?.executablePath;
// console.log(browserExecutable);

// resolveAssets(
//   "chrome-headless-shell/mac_arm-123.0.6312.122/chrome-headless-shell-mac-arm64/chrome-headless-shell"
// );
// const openBrowserOptions = {
//   onBrowserDownload,
//   shouldDumpIo: true,
//   browserExecutable,
// };
// console.log(
//   "PUPPETEER - OPEN BROWSER"
// );
// const puppeteerInstance =
//   await openBrowser(
//     "chrome",
//     openBrowserOptions
//   );
// const options: EnsureBrowserOptions =
//   {
//     onBrowserDownload,
//     browserExecutable,
//   };
// console.log("ENSURE BROWSER");

// await ensureBrowser(options);
