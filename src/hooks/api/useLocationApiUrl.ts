import { TApiUrl } from '@t/api';
import { resolveApiBase } from '@utils/api/resolveApiBase';
import { resolveApiPathname } from '@utils/api/resolveApiPathname';
import { useLocation } from 'react-router';

// this doesn't always work because unlike the old app the new app does not always have matching server-side routes to client-side routes
export const useLocationApiUrl =
  (): TApiUrl => {
    const { pathname } = useLocation();
    const apiPathname =
      resolveApiPathname(pathname);
    const apiBase = resolveApiBase();
    return `${apiBase}${apiPathname}`;
  };
