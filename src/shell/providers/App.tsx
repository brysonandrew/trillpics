import {
  AppProvider,
  TAppProviderProps,
  TLayoutOptionsRecord,
} from '@brysonandrew/app';
import { TChildrenProps } from '@brysonandrew/config-types/dom';
import { FC } from 'react';
import {
  CUSTOM_STYLE,
  TCustomStyle,
} from '@app/style';
import { APP_BASE_PROPS } from '@app/base';
import { AppInit } from '@brysonandrew/app/AppInit';
import { arrToChainedValueNest } from '@brysonandrew/layout-utils/arrToChainedValueNest';
import { LayoutPlaceholder } from '@brysonandrew/layout-placeholder';
import { Providers as InternalProviders } from '@context/Providers';

type TLayoutOptions =
  TLayoutOptionsRecord;
export type TApp = TCustomStyle &
  TLayoutOptions;
type TProps = TChildrenProps;
export const App: FC<TProps> = ({
  children,
}) => {
  return (
    <AppInit<TCustomStyle>
      style={CUSTOM_STYLE}
      {...APP_BASE_PROPS}
    >
      {(
        value: TAppProviderProps<TCustomStyle>,
      ) => (
        <>
          {arrToChainedValueNest<
            typeof value
          >(
            [LayoutPlaceholder],
            (
              nextValue: TAppProviderProps<TCustomStyle>,
            ) => (
              <AppProvider<TCustomStyle>
                {...nextValue}
              >
                <InternalProviders>
                  {children}
                </InternalProviders>
              </AppProvider>
            ),
          )(value)}
        </>
      )}
    </AppInit>
  );
};
