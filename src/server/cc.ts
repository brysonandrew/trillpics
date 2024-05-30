
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
export const createContext = async (
  opts: CreateNextContextOptions | CreateWSSContextFnOptions,
) => {
  // const session = await getSession(opts);

  // console.log('createContext for', session?.user?.name ?? 'unknown user');

  return {
    opts
    // session,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;