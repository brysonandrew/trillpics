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
import { QueryClient } from "@tanstack/react-query";
import { Boundary } from "@brysonandrew/boundary";
import { HelmetProvider } from "react-helmet-async";
import { MOTION_CONFIG } from "@brysonandrew/animation";
import { Shell } from "@shell/index";
import { Home } from "@pages/home";
import { VideoPlayer } from "@pages/home/video/player";
import { Gallery } from "@pages/gallery";

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
      {
        index: true,
        Component: Gallery,
      },
      {
        path: "/home",
        Component: Home,
      },

      {
        path: "/video",
        Component: VideoPlayer,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];

// const queryClient = new QueryClient();

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
            <Suspense fallback={null}>
              <RouterProvider
                router={router}
              />
            </Suspense>
          </MotionConfig>
        </Boundary>
      </HelmetProvider>
    </StrictMode>
  );
}
