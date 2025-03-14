import { resolveObjectKeys } from "~/utils/object";
import { GRADIENT_ZEBRA } from "~uno/rules/gradient/constants";

const element = (id: string) => {
  const e = document.getElementById(id);
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
export const imperativeBiZebra = (
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
