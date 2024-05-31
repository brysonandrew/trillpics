// import { Config } from "remotion";
// import { enableTailwind } from "@uno/enable-tailwind";

// (Config as any).overrideWebpackConfig(enableTailwind);

// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import {Config} from '@remotion/cli/config';
import {webpackOverride} from './src/server/generate/webpack/override';
export const REMOTION_ENTRY_POINT = "./src/remotion/index.tsx"
export const REMOTION_PUBLIC_DIR = "./assets/remotion";//"./assets";//
export const SERVE_URL = "https://brysonandrew.github.io/trillpics";
``
Config.overrideWebpackConfig(webpackOverride);
Config.setChromiumDisableWebSecurity(true);
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setEntryPoint(REMOTION_ENTRY_POINT);
Config.setPublicDir(REMOTION_PUBLIC_DIR);
