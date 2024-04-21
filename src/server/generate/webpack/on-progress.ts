import { progress } from "framer-motion";

export const onProgress = (
  ...args: any[]
) => {
  const [progress] = args;
  console.log(
    `webpack/onProgress Webpack bundling progress: ${progress}%`
  );
  console.log(args);
};
