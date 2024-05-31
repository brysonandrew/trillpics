import { bundle } from "@remotion/bundler";
import path from "path";
import { webpackOverride } from "~/server/generate/webpack/override";
import {
  REMOTION_ENTRY_POINT,
  REMOTION_PUBLIC_DIR,
} from "~root/remotion.config";

type TConfig = {
  onProgress(value: number): any;
};
export const useBundle = ({
  onProgress,
}: TConfig) => {
  const handler = async () =>
    await bundle({
      publicDir: path.join(
        process.cwd(),
        REMOTION_PUBLIC_DIR
      ),
      entryPoint: path.join(
        process.cwd(),
        REMOTION_ENTRY_POINT
      ),
      onProgress,
      webpackOverride,
    });

  return handler;
};
export type TUseBundleResult =
  ReturnType<typeof useBundle>;
