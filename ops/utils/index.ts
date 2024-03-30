import { PUBLIC_DIR } from '../config';

export { resolveFsInfo } from './resolveFsInfo';

const PUBLIC_DIR_REGEXP = new RegExp(`${PUBLIC_DIR}/`);
export const removePublicDir = (entry: string) =>
  entry.replace(PUBLIC_DIR_REGEXP, '');
