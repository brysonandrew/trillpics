// import {
//   type OnBrowserDownload,
//   type DownloadBrowserProgressFn,
// } from "@remotion/renderer";

const onProgress
// : DownloadBrowserProgressFn
 =
  (...args: any) => {
    console.log("ON BROWSER PROGRESS");

    const [
      {
        percent,
        downloadedBytes,
        totalSizeInBytes,
      },
    ] = args;
    console.log(
      `${Math.round(
        percent * 100
      )}% downloaded`
    );

    console.log(args);
  };

export const onBrowserDownload
//: OnBrowserDownload

=
  () => {
    console.log("ON BROWSER DOWNLOAD");

    return {
      version: "123.0.6312.86",
      onProgress,
    };
  };
