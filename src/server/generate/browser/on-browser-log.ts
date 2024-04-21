import { type BrowserLog } from "@remotion/renderer";
export const onBrowserLog = (
  ...args: [BrowserLog, ...any[]]
) => {
  const [info] = args;
  console.log("ON BROWSER LOG");
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

  console.log(...args);
};
