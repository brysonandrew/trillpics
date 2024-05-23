import {
  THoverChecksHandler,
  THoverChecksKeyHandler,
} from "~/store/state/hover/checks/active/types";
import { THoverCooldownEndHandler } from "~/store/state/hover/cooldown/types";

export type THoverKey = string | number;
export type THoverKeys = THoverKey;

export type THoverKeysState = {
  hoverCooldownKeys: THoverKey[];
  hoverKeys: THoverKey[];
};

export type THoverHandler = (
  hoverKey: THoverKey
) => void;

export type THoverMultiState =
  THoverKeysState & {
    isActiveHover: boolean;
    isHover(
      hoverKey: THoverKey
    ): boolean;
    hover(hoverKey?: THoverKey): void;
    unhover(hoverKey: THoverKey): void;
    hoverChecksActive: THoverChecksHandler;
    hoverChecksActiveKey: THoverChecksKeyHandler;
    cooldownEnd: THoverCooldownEndHandler;
  };

export type THoverState =
  THoverMultiState;
