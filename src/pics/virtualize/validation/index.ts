import { TVirtualizeList } from "~/pics/virtualize/context";

export const isVirtualizeListCheck = 
  (config?: TVirtualizeList | null) =>
  (
    handler: (
      config: TVirtualizeList
    ) => any
  ) =>  {
    if (!config) return;
    handler(config);
  };
