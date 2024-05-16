import { useMemo } from "react";

export type TUi = {
  footer: null | HTMLDivElement;
};
export const useUi = () => {
  const ui = useMemo<TUi>(() => {
    return {
      footer: null,
    };
  }, []);
  return ui;
};
export type TUseUiResult = ReturnType<
  typeof useUi
>;
