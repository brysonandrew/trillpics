export type THoverKey = string | number;

export type THoverHandler = (
  hoverKey: THoverKey
) => void;

export type THoverMultiState = {
  hoverKeyCooldown: THoverKey | null;
  hoverKeys: THoverKey[];
  hoverDoneCheck(): boolean;
  isHover(hoverKey: THoverKey): boolean;
  hover(hoverKey?: THoverKey): void;
  unhover(hoverKey: THoverKey): void;
};

export type THoverState =
  THoverMultiState;
