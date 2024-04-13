import { onBrowserDownload } from "@/server/remotion/on-browser-download";
import fs from "node:fs";
import {
  downloadBrowser,
  getRevisionInfo,
} from "./BrowserFetcher";
import { getLocalBrowser } from "./get-local-browser";
export type BrowserExecutable =
  | string
  | null;

export type BrowserStatus =
  | {
      type: "user-defined-path";
      path: string;
    }
  | {
      type: "local-browser";
      path: string;
    }
  | {
      type: "local-puppeteer-browser";
      path: string;
    }
  | {
      type: "no-browser";
    };

const getBrowserStatus = (
  browserExecutablePath: BrowserExecutable
): BrowserStatus => {
  if (browserExecutablePath) {
    if (
      !fs.existsSync(
        browserExecutablePath
      )
    ) {
      console.warn(
        `Browser executable was specified as '${browserExecutablePath}' but the path doesn't exist.`
      );
    }

    return {
      path: browserExecutablePath,
      type: "user-defined-path",
    };
  }
  console.log("LOCAL BROWSER");

  const localBrowser =
    getLocalBrowser();
  console.log(localBrowser);
  if (localBrowser !== null) {
    return {
      path: localBrowser,
      type: "local-browser",
    };
  }
  console.log("REVISION INFO");

  const revision = getRevisionInfo();
  console.log(revision);

  if (
    revision.local &&
    fs.existsSync(
      revision.executablePath
    )
  ) {
    return {
      path: revision.executablePath,
      type: "local-puppeteer-browser",
    };
  }
  console.log("NADA");

  return { type: "no-browser" };
};

const getRemoteBrowserStatus = (
  browserExecutable: BrowserExecutable
): BrowserStatus | null => {
  if (browserExecutable) {
    if (
      !fs.existsSync(browserExecutable)
    ) {
      throw new Error(
        `"browserExecutable" was specified as '${browserExecutable}' but the path doesn't exist. Pass "null" for "browserExecutable" to download a browser automatically.`
      );
    }

    return {
      path: browserExecutable,
      type: "user-defined-path",
    };
  }
  return null;
};
interface BrowserFetcherRevisionInfo {
  folderPath: string;
  executablePath: string;
  url: string;
  local: boolean;
}

export const getLocalBrowserExecutable =
  async (): Promise<BrowserFetcherRevisionInfo | null> => {
    const { onProgress, version }  =
      onBrowserDownload();

    const revisionInfo = 
      await downloadBrowser({
        indent: true,
        logLevel: "verbose", 
        onProgress,
        version,
      });

    return revisionInfo ?? null;
    // const status = getBrowserStatus(
    //   preferredBrowserExecutable
    // );
    // // if (status.type === 'no-browser') {
    // // 	throw new TypeError(
    // // 		'No browser found for rendering frames! Please open a GitHub issue and describe ' +
    // // 			'how you reached this error: https://remotion.dev/issue',
    // // 	);
    // // }
    // let path = null;
    // if (status.type === "no-browser") {

    // }

    // // const newStatus = getRemoteBrowserStatus(preferredBrowserExecutable);
    // // if (newStatus) {
    // // 	return newStatus.path;

    // // }
    // return path;
  };
