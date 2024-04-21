// import { Config } from "remotion";
// import { enableTailwind } from "@uno/enable-tailwind";

// (Config as any).overrideWebpackConfig(enableTailwind);

// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import {Config} from '@remotion/cli/config';
import {webpackOverride} from './src/server/generate/webpack/override';
export const REMOTION_ENTRY_POINT = "./src/remotion/index.tsx"
Config.overrideWebpackConfig(webpackOverride);
Config.setChromiumDisableWebSecurity(true);
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setEntryPoint(REMOTION_ENTRY_POINT);
Config.setPublicDir("./assets");
