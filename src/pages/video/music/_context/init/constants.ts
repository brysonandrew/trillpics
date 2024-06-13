export const MIME_TYPES = [
  "video/mp4;codecs=h264,aac",
  "video/webm;codecs=vp9,opus",
  "video/webm;codecs=vp8,opus",
  "video/webm;codecs=h264,opus",
  "video/mp4;codecs=h264,aac",
];

export const useSupportedMimeTypes = () => MIME_TYPES.filter((mimeType: string) => MediaRecorder.isTypeSupported(mimeType));
