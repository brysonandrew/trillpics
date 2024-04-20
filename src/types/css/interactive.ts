import {
  INTERACTIVE,
  SHAPES,
  LOOKS,
} from "@brysonandrew/uno-shortcuts";

export type TInteractiveShortcuts =
  keyof typeof INTERACTIVE;
export type TInteractiveShape =
  keyof typeof SHAPES;
export type TInteractiveLook =
  keyof typeof LOOKS;

export type TInteractiveProps = {
  shape?: TInteractiveShape;
  look?: TInteractiveLook;
};
