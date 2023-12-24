import packageJson from '../../package.json';
import { kebabToTitle } from '../../src/utils/format';

export const APP_TITLE = kebabToTitle(
  packageJson.name,
);

export const resolveRemFromPx = (
  px: number,
  base = 16,
) => `${px / base}rem`;

export const VERSION =
  packageJson.version;

export const INDEX_HTML = 'index.html';
export const ENTRY_FILE_NAME =
  'main.tsx';

export const PROTOCOL = 'http://';
export const HOST = 'localhost';
export const DEV_PORT = 3000;
export const SERVER_PORT = 3002;

export const DEV_HOST_URL = `${PROTOCOL}${HOST}${DEV_PORT}`;
export const DEV_SERVER_URL = `${PROTOCOL}${HOST}${DEV_PORT}`;

export const PUBLIC_ASSETS_DIR_NAME =
  'assets';
export const DIST_DIR_NAME = 'dist';
