import React, {
  StrictMode,
  Suspense,
} from "react";
import { MotionConfig } from "framer-motion";
import {
  NotFound,
  TRouteObjects,
} from "@brysonandrew/routes";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Boundary } from "@brysonandrew/boundary";
import { HelmetProvider } from "react-helmet-async";
import { MOTION_CONFIG } from "@brysonandrew/animation";
import { Shell } from "@shell/index";
import { Home } from "@pages/home";
import { VideoPlayer } from "@pages/home/video/player";

window.React = React;
window.ReactDOM = ReactDOM;

import "virtual:uno.css";
import "@css/fonts.css";
import "@css/global.css";

const ROUTES: TRouteObjects = [
  {
    path: "/",
    Component: Shell,
    children: [
      { path: "/", Component: Home },
      {
        path: "/video",
        Component: VideoPlayer
      },
      {
        path: "*",
        Component: NotFound
      },
    ],
  },
];

const queryClient = new QueryClient();

const router =
  createBrowserRouter(ROUTES);

if (import.meta.hot) {
  import.meta.hot.dispose(() =>
    router.dispose()
  );
}

const root =
  document.getElementById("root");
if (root) {
  createRoot(root).render(
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
    </StrictMode>
  );
}
