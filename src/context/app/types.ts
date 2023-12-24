export type TContext = {
  isMenu: boolean;
  isInit: boolean;
  isOffline: boolean;
  onMenu(): void;
  onInit(): void;
  onOffline(): void;
  onOnline(): void;
};
