import {
  StrictMode,
  Suspense,
} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Source } from './Source';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { Boundary } from '@components/boundary';
import { HelmetProvider } from 'react-helmet-async';
import { init as initServiceWorker } from './service-worker/init';
import { Head } from './Head';
import { createClient } from '@supabase/supabase-js';
import { Provider as SupabaseProvider } from 'react-supabase';

const queryClient = new QueryClient();

const supabase = createClient(
  import.meta.env
    .VITE_SUPABASE_PROJECT_URL,
  import.meta.env
    .VITE_SUPABASE_ANON_PUBLIC_KEY,
);

initServiceWorker();

import 'virtual:uno.css';
import '@css/reset.css';
import '@css/globals.css';
import '@css/message-like-ant/message.css';

const root =
  document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <SupabaseProvider
        value={supabase}
      >
        <HelmetProvider>
          <Boundary>
            <QueryClientProvider
              client={queryClient}
            >
              <Router>
                <Head />
                <Suspense
                  fallback={null}
                >
                  <Source />
                </Suspense>
              </Router>
            </QueryClientProvider>
          </Boundary>
        </HelmetProvider>
      </SupabaseProvider>
    </StrictMode>,
  );
}
