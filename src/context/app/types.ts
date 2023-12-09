export type TContext = {
  isInit: boolean;
  isOffline: boolean;
  onInit(): void;
  onOffline(): void;
  onOnline(): void;
};
