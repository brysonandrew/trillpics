import { TOuterHandle } from "~/pics/virtualize/outer";

export const isOuterCheck =
  (config?: TOuterHandle | null) =>
  (
    handler: (
      config: TOuterHandle
    ) => any
  ) => {
    if (!config) return;
    return handler(config);
  };
