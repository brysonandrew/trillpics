import {
  TDisplay,
  TPending,
} from '@t/image';

export type TBasePassedProps = {
  canvas: 'black' | 'white';
};
export type TShopPassedProps =
  TBasePassedProps & {
    isShop: true;
    config: TDisplay;
  };
export type TCheckoutPassedProps =
  TBasePassedProps & {
    isShop: false;
    copies: TPending[]; // checkout only
    count: number;
    config: TPending;
  };
export type TPassedProps =
  | TShopPassedProps
  | TCheckoutPassedProps;
