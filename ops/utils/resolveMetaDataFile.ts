import { writeFileData } from "@ops/utils/writeFileData";
import sharp, { Metadata } from "sharp";

export const resolveMetaDataFile = async (
  entry: any,
  path: string,
  extra = {}
): Promise<Metadata> => {
  const result: Metadata = await sharp(
    entry
  ).metadata();
  writeFileData(path, {
    ...result,
    ...extra,
  });
  return result;
};
