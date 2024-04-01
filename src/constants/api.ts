// export const SUBSCRIBE_TO_FILE_EXISTENCE = 'https://trill-pics.fly.dev/api/subscribe-to-file-existence';//post

import { useVideoStore } from "@store/index";

// const p ={
//   "file": "out/pic-series.mp4",
//   "clientId": "0.1803158797559199"
// }
// const r = {
//   "success": true,
//   "data": {
//       "exists": false
//   }
// }
export const URL =//"https://trill-pics.fly.dev/api/render";
  // "https://trill-pics.fly.dev/api/subscribe-to-file-existence";
  //https://trill-pics.fly.dev/api/unsubscribe-from-file-existence
  // https://trill-pics.fly.dev/api/can-update-default-props
  //;
  import.meta.env.DEV
    ? "http://localhost:3001/api/render"
    : "https://trill-pics.fly.dev/api/render";
const payload = {
  compositionId: "pic-series",
  type: "video",
  outName: "out/vid1.mp4",
  imageFormat: "jpeg",
  jpegQuality: null,
  scale: 1,
  logLevel: "verbose",
  codec: "h264",
  concurrency: 1,
  crf: 18,
  endFrame: 119,
  startFrame: 0,
  muted: false,
  enforceAudioTrack: false,
  proResProfile: null,
  x264Preset: "medium",
  pixelFormat: "yuv420p",
  audioBitrate: null,
  videoBitrate: null,
  everyNthFrame: 1,
  numberOfGifLoops: null,
  delayRenderTimeout: 30000,
  audioCodec: "aac",
  disallowParallelEncoding: false,
  chromiumOptions: {
    headless: true,
    disableWebSecurity: true,
    ignoreCertificateErrors: false,
    gl: null,
    userAgent: null,
    enableMultiProcessOnLinux: false,
  },
  envVariables: {},
  serializedInputPropsWithCustomSchema:
    '{"pics":["11","21","31","41","51"]}',
  offthreadVideoCacheSizeInBytes: null,
  colorSpace: "default",
  multiProcessOnLinux: false,
  encodingBufferSize: null,
  encodingMaxRate: null,
  beepOnFinish: false,
  repro: false,
  forSeamlessAacConcatenation: false,
  separateAudioTo: null,
};
export const useRender = () => {
  const { videoPics } = useVideoStore();
  const handler = async () => {
    const r = await fetch(URL, {
      body: JSON.stringify({
        ...payload,
      }),
      method: "POST",
    });
    console.log(
      "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
    );
    console.dir(r);
    console.log(
      "██████████████▓▒░ 🧨 ░▒ line: 66, file: api.ts ▓▒░ 🧨 ░▒██████████████"
    );

    const re = r.json();
    console.log(
      "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
    );
    console.dir(re);
    console.log(
      "██████████████▓▒░ 🧨 ░▒ line: 71, file: api.ts ▓▒░ 🧨 ░▒██████████████"
    );
  };
  return handler;
};
