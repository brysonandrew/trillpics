import type {
  RenderMediaOnProgress,
  RenderMediaOnDownload,
  BrowserLog
} from "@remotion/renderer";

export type TGenerateProgressData = Parameters<RenderMediaOnProgress>[0]
export type TGenerateProgress = {
  type: "progress";
  data: TGenerateProgressData;
};
type TLog = BrowserLog;
export type TGenerateLog = {
  type: "log";
  data: TLog;
};
export type TGenerateDownloadData = Parameters<RenderMediaOnDownload>[0]
export type TGenerateDownload = {
  type: "download";
  data: TGenerateDownloadData;
};

export type UGenerateSubscriptionResult =
  | TGenerateProgress
  | TGenerateDownload
  | TGenerateLog;

export type TGenerateState = {
  isDownloadComplete: boolean;
  progress: TGenerateProgressData | null;
  download: TGenerateDownloadData | null;
  logs: TLog[];
  error: any | string | null;
};
