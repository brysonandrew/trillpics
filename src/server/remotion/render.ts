import { TPicSeriesProps } from "@/remotion/pic-series/types";
import {
  renderMedia,
  selectComposition,
} from "@remotion/renderer";

export const render = async ({
  input,
}: {
  input: TPicSeriesProps;
}) => {
  console.log("INIT");
  const compositionId = "pic-series";
  const serveUrl =
    "https://brysonandrew.github.io/trillpics";
  const inputProps = input;
  console.log(input);

  const composition =
    await selectComposition({
      serveUrl,
      id: compositionId,
      inputProps,
    });
  console.log("COMP DONE");
  console.log(composition);

  await renderMedia({
    composition,
    serveUrl,
    codec: "h264",
    outputLocation: `./out/render-${compositionId}.mp4`,
    inputProps,
  });
  console.log("RENDER DONE");
};
