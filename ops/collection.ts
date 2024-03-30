import fg from "fast-glob";
import sharp, {  Metadata,  OutputInfo,} from "sharp";
import { resolveMetaDataFile } from "@ops/utils/resolveMetaDataFile";
import { resolveWebp } from "@ops/utils/resolveWebp";
import { writeFileData } from "@ops/utils/writeFileData";
import { writeAvif } from "@ops/utils/resolveAvif";
import { resolve } from "path";
import {
  IMAGES_GLOB,
  MAX_W,
  MAX_SUFFIX,
  LOOKUP_PATH,
  LOOKUP_PATH_2,
  PRECACHE_PATH,
} from "./config";
import { resolveFsInfo } from "./utils/resolveFsInfo";
import { TScreensRecord } from "./types";
import { removePublicDir } from "./utils";

(async () => {
  try {
    const entries = await fg([
      IMAGES_GLOB,
    ]);
    const originals = entries.map(
      (entry) => removePublicDir(entry)
    );
    writeFileData(PRECACHE_PATH, [
      ...originals,
    ]);
    for await (const entry of entries) {
      const { noExtFileName, dir } =
        resolveFsInfo(entry);

        const nextEntryNoExt = resolve(entry, '..', '..', 'pics',noExtFileName);
        console.log( nextEntryNoExt)

     await writeAvif(entry, nextEntryNoExt);
    }
  } catch (error) {
    console.error(error);
  }
})();
