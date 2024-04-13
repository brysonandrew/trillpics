type Platform =
  | "linux64"
  | "mac-x64"
  | "mac-arm64"
  | "win64";

const getPlatform = (): Platform => {
  const platform = os.platform();
  switch (platform) {
    case "darwin":
      return os.arch() === "arm64"
        ? "mac-arm64"
        : "mac-x64";
    case "linux":
      return "linux64";
    case "win32":
      return "win64";
    default:
      throw new Error(
        "Unsupported platform: " +
          platform
      );
  }
};

const destination =
  "chrome-headless-shell";

const getDownloadsFolder = () => {
  return path.join(
    "downloads-cache-dir",
    destination
  );
};
const TESTED_VERSION = "123.0.6312.86";
const getFolderPath = (
  downloadsFolder: string,
  platform: Platform
): string => {
  return path.resolve(
    downloadsFolder,
    platform
  );
};

const getExecutablePath = () => {
  const downloadsFolder =
    getDownloadsFolder();
  const platform = getPlatform();
  const folderPath = getFolderPath(
    downloadsFolder,
    platform
  );

  return path.join(
    folderPath,
    `chrome-headless-shell-${platform}`,
    platform === "win64"
      ? "chrome-headless-shell.exe"
      : "chrome-headless-shell"
  );
};

function getChromeDownloadUrl({
  platform,
  version,
}: {
  platform: Platform;
  version: string | null;
}): string {
  return `https://storage.googleapis.com/chrome-for-testing-public/${
    version ?? TESTED_VERSION
  }/${platform}/chrome-headless-shell-${platform}.zip`;
}