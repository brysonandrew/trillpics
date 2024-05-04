import fg from "fast-glob";
import { writeFileData } from "~ops/utils/writeFileData";
import { writeAvif } from "~ops/utils/resolveAvif";
import { resolve } from "path";
import { IMAGES_GLOB, PRECACHE_PATH } from "./config";
import { resolveFsInfo } from "./utils/resolveFsInfo";
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
      const { noExtFileName } =
        resolveFsInfo(entry);

        const nextEntryNoExt = resolve(entry, 
          '..', '..', 'pics',noExtFileName);

     await writeAvif(entry, nextEntryNoExt);
    }
  } catch (error) {
    console.error(error);
  }
})();
