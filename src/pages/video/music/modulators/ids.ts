import { useMemo } from "react";
import { resolveCompositeKey } from "@brysonandrew/utils-key";

export const useIds = (id: string) => {
  const IDS = useMemo(() => {
    return {
      root: resolveCompositeKey(
        "root",
        id
      ),
      button: resolveCompositeKey(
        "button",
        id
      ),
      started: {
        icon: resolveCompositeKey(
          "started",
          "icon",
          id
        ),
        inputs: resolveCompositeKey(
          "started",
          "inputs",
          id
        ),
      },
      disconnected: {
        icon: resolveCompositeKey(
          "disconnected",
          "icon",
          id
        ),
      },
    } as const;
  }, [id]);

  return IDS;
};
export type TUseIdsResult = ReturnType<
  typeof useIds
>;
