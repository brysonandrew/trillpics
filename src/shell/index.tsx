import { type FC } from 'react';
import { Variables } from '@css/Variables';
import { Notifications } from '@components/notifications';
import { useApp } from '@brysonandrew/app';
import { Outlet } from 'react-router';
import { withProviders } from '@shell/providers/withProviders';
import { Global } from '@shell/global';
import { useMeasureScrollBarHandler } from '@hooks/dom/useMeasureScrollBarHandler';

export const Shell: FC = withProviders(
  () => {
    const { BackScreen } = useApp();
    const handler =
      useMeasureScrollBarHandler();

    return (
      <div onClick={() => handler()}>
        <Global>
          <BackScreen
            dark={{
              classValue:
                'opacity-dark bg-dark',
            }}
          />
          <Variables />
          <Outlet />
          <Notifications />
        </Global>
      </div>
    );
  },
);
