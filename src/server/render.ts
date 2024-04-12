// import { webpackOverrideFn } from "@/video/webpack-override";
import {
  renderMedia, 
  selectComposition,
} from "@remotion/renderer";
export type TRenderInput = {pics:string[]}

export const render = async ({input}: any) => {
  console.log("input")
  console.log(input)

  // The composition you want to render
  const compositionId = "pic-series";
  // You only have to create a bundle once, and you may reuse it
  // for multiple renders that you can parametrize using input props.
  const bundleLocation = 'https://brysonandrew.github.io/trillpics';
  // await bundle({
  //   publicDir: "./assets",
  //   entryPoint: path.resolve(
  //     "./src/index.tsx"
  //   ),
  //   // If you have a Webpack override, make sure to add it here
  //   // webpackOverride: webpackOverrideFn,
  // });
  console.log("bundleLocation")
  console.log(bundleLocation);
  // Parametrize the video by passing props to your component.
  const inputProps = {
    pics: input?.pics ?? ["123", "22"],
  };
  // Get the composition you want to render. Pass `inputProps` if you
  // want to customize the duration or other metadata.
  const composition =
    await selectComposition({
      serveUrl: bundleLocation,
      id: compositionId,
      inputProps,
    });
  // Render the video. Pass the same `inputProps` again
  // if your video is parametrized with data.
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation: `./out/render-${compositionId}.mp4`,
    inputProps,
  });
  console.log("Render done!");
};
