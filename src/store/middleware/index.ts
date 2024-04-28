export const IMMER_MIDDLEWARE = [
  "zustand/immer",
  undefined,
];
export const SUBSCRIBE_MIDDLEWARE = [
  "zustand/subscribeWithSelector",
  undefined,
];

export const DEVTOOLS_MIDDLEWARE = [
  "zustand/devtools",
  undefined,
];

export const MIDDLEWARES = [
  IMMER_MIDDLEWARE,
  SUBSCRIBE_MIDDLEWARE,
  DEVTOOLS_MIDDLEWARE,
] as const;
