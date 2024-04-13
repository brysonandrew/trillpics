import { type BrowserLog } from "@remotion/renderer";
export const onBrowserLog = (
  info: BrowserLog
) => {
  console.log(
    `${info.type}: ${info.text}`
  );
  console.log(
    info.stackTrace
      .map((stack) => {
        return `  ${stack.url}:${stack.lineNumber}:${stack.columnNumber}`;
      })
      .join("\n")
  );
};
