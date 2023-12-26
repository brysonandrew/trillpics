import {
  Navigate,
  useRoutes,
} from 'react-router-dom';
import { Shell as MainShell } from '@main/Shell';
import { Index } from '@pages/index';
import { List } from '@pages/list';
import { Checkout } from '@pages/checkout';

const WITH_SHELL_KEY = 'with-shell';

const SHELL_ROUTES: any[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/list',
    element: <List />,
  },
].map((v) => ({
  ...v,
  key: WITH_SHELL_KEY,
}));

const STANDALONE_ROUTES = [
  {
    path: '*',
    element: (
      <Navigate to='/' replace />
    ),
  },
];

const ROUTES = [
  ...SHELL_ROUTES,
  ...STANDALONE_ROUTES,
];

export const Source = () => {
  const page = useRoutes(ROUTES);
  const key =
    page?.props.match.route.key;

  switch (key) {
    case WITH_SHELL_KEY:
      return (
        <MainShell>
          <>{page}</>
        </MainShell>
      );
    default:
      return page;
  }
};
