import { TPending } from "@t/image";
export type TBasePassedProps = {
  canvas: "black" | "white";
};
export type TShopPassedProps =
  TBasePassedProps & {
    isShop: true;
  };
export type TCheckoutPassedProps =
  TBasePassedProps & {
    isShop: false;
    copies: TPending[]; // checkout only
    count: number;
  };
export type TPassedProps =
  | TShopPassedProps
  | TCheckoutPassedProps;
