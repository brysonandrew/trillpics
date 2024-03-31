import { init as _init } from '@brysonandrew/service-worker/init';
import precacheEntries from '../precache.json';

export const init = () =>
  _init({
    path:"./service-worker.js",
    precacheEntries,
    isDisabled: import.meta.env.DEV,
  });
