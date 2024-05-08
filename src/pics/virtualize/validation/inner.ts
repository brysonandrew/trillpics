import { TInnerHandle } from "~/pics/virtualize/inner";

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
