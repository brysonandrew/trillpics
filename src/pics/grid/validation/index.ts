import { TGrid } from "~/shell/ready/context/types";

export const isVirtualizeListCheck = 
  (config?: TGrid | null) =>
  (
    handler: (
      config: TGrid
    ) => any
  ) =>  {
    if (!config) return;
    handler(config);
  };
