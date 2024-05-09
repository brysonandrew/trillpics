import { TInnerHandle } from "~/pics/grid/inner";

export const isInnerCheck =
  (config?: TInnerHandle | null) =>
  (
    handler: (
      config: TInnerHandle
    ) => any
  ) => {
    if (!config) return;
    handler(config);
  };
