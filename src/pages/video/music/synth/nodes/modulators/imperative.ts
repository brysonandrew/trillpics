import { resolveObjectKeys } from "~/utils/object";
import {
  DARK_CONIC,
  DARK_METAL_CONIC,
  GRADIENT_DIAMOND_METAL_RADIAL,
  GRADIENT_ZEBRA,
} from "~uno/rules/gradient/constants";

const element = (id: string) => {
  const e = document.getElementById(id);
  console.log(id, e);
  return e;
};
export const imperativeHide = (
  id: string
) => {
  const e = element(id);
  if (e) {
    e.style.display = "none";
  }
};
export const imperativeShow = (
  id: string
) => {
  const e = element(id);
  if (e) {
    e.style.display = "flex";
  }
};

export const imperativeBiNone = (
  id: string
) => {
  const e = element(id);
  if (e) {
    e.style.backgroundImage = "none";
  }
};
export const imperativeBiConic = (
  id: string
) => {
  const e = element(id);
  if (e) {
    resolveObjectKeys(
      GRADIENT_ZEBRA
    ).forEach((key) => {
      e.style[key] =
        GRADIENT_ZEBRA[key];
    });
  }
};
