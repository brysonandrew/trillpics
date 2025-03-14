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
import { ROUTES } from "~/routes/index";
import { MOTION_CONFIG } from "@brysonandrew/motion-config-constants";

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
