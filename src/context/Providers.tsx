import { Provider as AppProvider } from '@context/app/Provider';
import { Provider as ViewportProvider } from '@context/viewport/Provider';
import { Provider as UserProvider } from '@context/user/Provider';
import { Provider as AuthProvider } from '@context/auth/Provider';

import { TChildren } from '@t/index';
import { FC } from 'react';

type TProps = { children: TChildren };
export const Providers: FC<TProps> = ({
  children,
}) => {
  return (
    <AppProvider>
      <UserProvider>
        <ViewportProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ViewportProvider>
      </UserProvider>
    </AppProvider>
  );
};
