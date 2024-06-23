import { TScaleKey, SCALE_RECORD } from "~/constants/scales";

export const isScaleKey = (
  key: string
): key is TScaleKey => {
  if (key in SCALE_RECORD) return true;
  return false;
};