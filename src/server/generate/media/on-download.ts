import { RenderMediaOnDownload } from "@remotion/renderer";

export const onDownload: RenderMediaOnDownload =
  (...args) => {
    console.log("DOWNLOAD.RenderMediaOnDownload");
    console.log(...args);
  };
