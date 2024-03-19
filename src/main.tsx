import React, {
  StrictMode,
  Suspense,
} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
window.React = React;
window.ReactDOM = ReactDOM;


import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Boundary } from '@brysonandrew/boundary';
import { HelmetProvider } from 'react-helmet-async';
import { ROUTES } from 'config/routes';
import { MOTION_CONFIG } from '@brysonandrew/animation';
import { MotionConfig } from 'framer-motion';

const queryClient = new QueryClient();

import 'virtual:uno.css';
import '@css/fonts.css';
import '@css/global.css';
import '@css/message-like-ant/message.css';

const router =
  createBrowserRouter(ROUTES);

if (import.meta.hot) {
  import.meta.hot.dispose(() =>
    router.dispose(),
  );
}

const root =
  document.getElementById('root');
if (root) {
  ReactDOMClient.createRoot(
    root,
  ).render(
    <StrictMode>
      <HelmetProvider>
        <Boundary>
          <MotionConfig
            {...MOTION_CONFIG}
          >
            <QueryClientProvider
              client={queryClient}
            >
              <Suspense fallback={null}>
                <RouterProvider
                  router={router}
                />
              </Suspense>
            </QueryClientProvider>
          </MotionConfig>
        </Boundary>
      </HelmetProvider>
    </StrictMode>,
  );
}
