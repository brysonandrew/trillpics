import App from "~/pages/video/music/synthwave/app";
import { SynthwaveProvider } from "~/pages/video/music/synthwave/state/Provider";

export const Synthwave = () => (
  <SynthwaveProvider>
    <App />
  </SynthwaveProvider>
);
