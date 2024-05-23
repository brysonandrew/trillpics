import {
  AppProvider,
  TAppProviderProps,
  TLayoutOptionsRecord,
} from "@brysonandrew/app";
import { TChildrenProps } from "@brysonandrew/config-types/dom";
import { FC } from "react";
import {
  CUSTOM_STYLE,
  TCustomStyle,
} from "~app/style";
import { APP_BASE_PROPS } from "~app/base";
import { AppInit } from "@brysonandrew/app/AppInit";
import { arrToChainedValueNest } from "@brysonandrew/layout-utils/arrToChainedValueNest";

type TLayoutOptions =
  TLayoutOptionsRecord;
export type TCore = TCustomStyle &
  TLayoutOptions;
type TProps = TChildrenProps;
export const Core: FC<TProps> = ({
  children,
}) => {
  return (
    <AppInit<TCustomStyle>
      style={CUSTOM_STYLE}
      {...APP_BASE_PROPS}
    >
      {(
        value: TAppProviderProps<TCustomStyle>
      ) => (
        <>
          {arrToChainedValueNest<
            typeof value
          >(
            [],
            (
              nextValue: TAppProviderProps<TCustomStyle>
            ) => (
              <AppProvider<TCustomStyle>
                {...nextValue}
              >
                {children}
              </AppProvider>
            )
          )(value)}
        </>
      )}
    </AppInit>
  );
};
