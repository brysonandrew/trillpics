import {
  HOST,
  SERVER_PORT,
  PROTOCOL,
} from '@app/config';
import { resolveApiBase } from './resolveApiBase';

export const resolveApiCorsBase =
  () => {
    if (import.meta.env.DEV) {
      const apiBase = resolveApiBase();

      return `${PROTOCOL}${HOST}:${SERVER_PORT}/${apiBase}`;
    }
    return '';
  };
