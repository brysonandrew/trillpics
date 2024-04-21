import React, {
  StrictMode,
  Suspense,
} from "react";
import { MotionConfig } from "framer-motion";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Boundary } from "@brysonandrew/boundary";
import { HelmetProvider } from "react-helmet-async";
import { MOTION_CONFIG } from "@brysonandrew/motion-core";
import {
  ProvidersApi,
  RootProvider,
} from "~/shell/providers/api";
import { ROUTES } from "~app/routes";
import { init as initServiceWorker } from "~app/service-worker/init";
import { AppProvider } from "@brysonandrew/app";

initServiceWorker();

window.React = React;
window.ReactDOM = ReactDOM;

import "virtual:uno.css";
import "~/css/fonts.css";
import "~/css/global.css";

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
            <ProvidersApi>
              <Suspense fallback={null}>
                <RouterProvider
                  router={router}
                />
              </Suspense>
            </ProvidersApi>
          </MotionConfig>
        </Boundary>
      </HelmetProvider>
    </StrictMode>
  );
}
