import { ServerOptions } from 'vite';
import { DEV_PORT, HOST } from '../app';

export const SERVER: ServerOptions = {
  host: HOST,
  port: DEV_PORT,
  // proxy: {
  //   '/api/v1/queue/default/status': {
  //     target:
  //       'http://localhost:9090/api/v1/queue/default/status',
  //     changeOrigin: true,
  //     secure: false,
  //     ws: true,
  //   },
  // },
};
