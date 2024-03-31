// export const SUBSCRIBE_TO_FILE_EXISTENCE = 'https://trill-pics.fly.dev/api/subscribe-to-file-existence';//post

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
export const X =
  "https://trill-pics.fly.dev/api/subscribe-to-file-existence";
//https://trill-pics.fly.dev/api/unsubscribe-from-file-existence
// https://trill-pics.fly.dev/api/can-update-default-props
//https://trill-pics.fly.dev/api/render
const rp = {
  compositionId: "pic-series",
  type: "video",
  outName: "out/pic-series.mp4",
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
    '{"pics":["video/pics/1.avif","video/pics/2.avif","video/pics/3.avif","video/pics/4.avif","video/pics/5.avif"]}',
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
