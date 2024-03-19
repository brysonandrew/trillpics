// import { Config } from "remotion";
// import { enableTailwind } from "@uno/enable-tailwind";

// (Config as any).overrideWebpackConfig(enableTailwind);

// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import {Config} from '@remotion/cli/config';

Config.setVideoImageFormat('png');
Config.setOverwriteOutput(true);
