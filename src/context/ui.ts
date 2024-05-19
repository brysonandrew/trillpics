import { useMemo } from "react";
import { TElement } from "@brysonandrew/config-types";
export type TUiValue =
TElement | null;

export type TUi = {
  foundation: TUiValue;
  header: TUiValue;
  center: TUiValue;
  footer: TUiValue;
};
export const useUi = () => {
  const ui = useMemo<TUi>(() => {
    return {
      foundation: null,
      header: null,
      center: null,
      footer: null,
    };
  }, []);
  return ui;
};
export type TUseUiResult = ReturnType<
  typeof useUi
>;
