import { Provider as AppProvider } from '@context/app/Provider';
import { Provider as ViewportProvider } from '@context/viewport/Provider';
import { Provider as UserProvider } from '@context/user/Provider';
import { Provider as ScrollProvider } from '@context/scroll/Provider';
import { CheckoutProvider } from '@context/checkout/Provider';

import { TChildren } from '@brysonandrew/config-types';
import { FC } from 'react';

type TProps = { children: TChildren };
export const Providers: FC<TProps> = ({
  children,
}) => {
  return (
    <AppProvider>
      <ScrollProvider>
        <CheckoutProvider>
          <UserProvider>
            <ViewportProvider>
              <>{children}</>
            </ViewportProvider>
          </UserProvider>
        </CheckoutProvider>
      </ScrollProvider>
    </AppProvider>
  );
};
``