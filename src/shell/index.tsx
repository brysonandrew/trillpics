import { type FC } from 'react';
import { Notifications } from '@components/notifications';
import { Outlet } from 'react-router';
import { withProviders } from '@shell/providers/withProviders';
import { Global } from '@shell/global';
import { BackScreenFill } from '@components/layout/BackScreenFill';
import { Header } from '@shell/header';
import { Footer } from '@pages/checkout/footer';

export const Shell: FC = withProviders(
  () => {
    return (
      <Global>
        <BackScreenFill />
        <Header />
        <Outlet />
        <Footer />
        <Notifications />
      </Global>
    );
  },
);
