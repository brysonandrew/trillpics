import { TSyncValue } from "~/pages/video/music/modulators/dropdowns/sync";
import { TAllParamsKey } from "~/pages/video/music/modulators/types";

export const resolveSync = (
  id: string,
): TSyncValue => {
  const idParts = id.split(".");
  const paramKey =
    idParts[idParts.length - 1];
  const key = paramKey as TAllParamsKey;
  if (key === "delayTime") {
    return "1/16";
  }
  return "1/4";
};
