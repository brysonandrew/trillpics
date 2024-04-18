import { writeFileData } from "~ops/utils/writeFileData";
import sharp, { OutputInfo } from "sharp";

export const writeAvif = async (
  entry: string,
  nextEntryNoExt: string
) => {
  const avifEntry = `${nextEntryNoExt}.avif`;
  const avif: OutputInfo = await sharp(
    entry
  )
    .avif({effort:6})
    .toFile(avifEntry);

  writeFileData(
    `${nextEntryNoExt}-output-avif.md`,
    avif
  );

  return avifEntry;
};
