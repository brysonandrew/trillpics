
import { COLLECTION_ASSETS_DIR } from '../config';

type TDir = string;
type TName = string;
type TExt = string;
type TFileName = `${TName}.${TExt}`;
type TMediaEntry =
  `${typeof COLLECTION_ASSETS_DIR}/${TDir}/${TName}/${TFileName}`;
export const resolveFsInfo = (
  entry: TMediaEntry | string,
) => {
  const [fileName, name, dir] = entry
    .split('/')
    .filter(Boolean)
    .reverse();
  const [noExtFileName, ext] = fileName.split('.');

  return {
    dir,
    name,
    fileName,
    noExtFileName,
    ext,
  };
};
