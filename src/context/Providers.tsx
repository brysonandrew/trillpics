import { Provider as AppProvider } from '@context/app/Provider';
import { Provider as ViewportProvider } from '@context/viewport/Provider';
import { Provider as UserProvider } from '@context/user/Provider';
import { Provider as AuthProvider } from '@context/auth/Provider';
import { Provider as DarkModeProvider } from '@context/dark-mode/Provider';
import { Provider as CursorProvider } from '@context/cursor/Provider';
import { Provider as ScrollProvider } from '@context/scroll/Provider';
import { Provider as CheckoutProvider } from '@context/checkout/Provider';

import { TChildren } from '@t/index';
import { FC } from 'react';

type TProps = { children: TChildren };
export const Providers: FC<TProps> = ({
  children,
}) => {
  return (
    <AppProvider>
      <DarkModeProvider>
        <CursorProvider>
          <ScrollProvider>
            <CheckoutProvider>
              <UserProvider>
                <ViewportProvider>
                  <AuthProvider>
                    {children}
                  </AuthProvider>
                </ViewportProvider>
              </UserProvider>
            </CheckoutProvider>
          </ScrollProvider>
        </CursorProvider>
      </DarkModeProvider>
    </AppProvider>
  );
};
