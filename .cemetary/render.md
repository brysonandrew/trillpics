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
//'/api/cancel'
// export const URL = //"https://trill-pics.fly.dev/api/render";
//   // "https://trill-pics.fly.dev/api/subscribe-to-file-existence";
//   //https://trill-pics.fly.dev/api/unsubscribe-from-file-existence
//   // https://trill-pics.fly.dev/api/can-update-default-props
//   //;
//   import.meta.env.DEV
//     ? "http://localhost:3001/api/render"
//     : "https://trill-pics.fly.dev/api/render";
    
// const payload = {
//   "compositionId": "pic-series",
//   "type": "video",
//   "outName": "out/pic-series.mp4",
//   "imageFormat": "jpeg",
//   "jpegQuality": null,
//   "scale": 1,
//   "logLevel": "info",
//   "codec": "h264",
//   "concurrency": 5,
//   "crf": 18,
//   "endFrame": 119,
//   "startFrame": 0,
//   "muted": false,
//   "enforceAudioTrack": false,
//   "proResProfile": null,
//   "x264Preset": "medium",
//   "pixelFormat": "yuv420p",
//   "audioBitrate": null,
//   "videoBitrate": null,
//   "everyNthFrame": 1,
//   "numberOfGifLoops": null,
//   "delayRenderTimeout": 30000,
//   "audioCodec": "aac",
//   "disallowParallelEncoding": false,
//   "chromiumOptions": {
//       "headless": true,
//       "disableWebSecurity": true,
//       "ignoreCertificateErrors": false,
//       "gl": null,
//       "userAgent": null,
//       "enableMultiProcessOnLinux": false
//   },
//   "envVariables": {
//       "REMOTION_AWS_ACCESS_KEY_ID": "AKIAZI2LDPXKTPQQPRNA",
//       "REMOTION_AWS_SECRET_ACCESS_KEY": "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",
//       "S3_BUCKET_NAME": "videos"
//   },
//   "serializedInputPropsWithCustomSchema": "{\"pics\":[\"1\",\"2\",\"3\",\"4\",\"5\"]}",
//   "offthreadVideoCacheSizeInBytes": null,
//   "colorSpace": "default",
//   "multiProcessOnLinux": false,
//   "encodingBufferSize": null,
//   "encodingMaxRate": null,
//   "beepOnFinish": false,
//   "repro": false,
//   "forSeamlessAacConcatenation": false,
//   "separateAudioTo": null
// };

// export const useRender = () => {
//   const { videoPics } = useVideoStore();
//   const handler = async () => {
//     const r = await fetch(URL, {
//       body: JSON.stringify({
//         ...payload,
//         serializedInputPropsWithCustomSchema:
//           { pics: videoPics },
//       }),
//       method: "POST",
//     });
//     console.log(
//       "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
//     );
//     console.dir(r);
//     console.log(
//       "██████████████▓▒░ 🧨 ░▒ line: 66, file: api.ts ▓▒░ 🧨 ░▒██████████████"
//     );

//     const re = await r.json();
//     console.log(
//       "▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁"
//     );
//     console.dir(re);
//     console.log(
//       "██████████████▓▒░ 🧨 ░▒ line: 71, file: api.ts ▓▒░ 🧨 ░▒██████████████"
//     );
//   };
//   return handler;
// };
