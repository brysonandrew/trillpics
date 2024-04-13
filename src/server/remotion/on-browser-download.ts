import {
  type OnBrowserDownload,
  type DownloadBrowserProgressFn,
} from "@remotion/renderer";

const onProgress: DownloadBrowserProgressFn =
  ({
    percent,
    downloadedBytes,
    totalSizeInBytes,
  }) => {
    console.log(
      `${Math.round(
        percent * 100
      )}% downloaded`
    );
  };

export const onBrowserDownload: OnBrowserDownload =
  () => {
    console.log("Downloading browser");

    return {
      // Pass `null` to use Remotion's recommendation.

      version: "123.0.6312.86",
      onProgress,
    };
  };
