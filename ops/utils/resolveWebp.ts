import { writeFileData } from "~ops/utils/writeFileData";
import sharp, { OutputInfo } from "sharp";

export const resolveWebp = async (
  entry: any,
  path: string
) => {
  const webpEntry = `${path}.webp`;
  const webp: OutputInfo = await sharp(
    entry
  )
    .webp({ lossless: true })
    .toFile(webpEntry);
  writeFileData(
    `${path}-output-webp.md`,
    webp
  );

  return webpEntry;
};
