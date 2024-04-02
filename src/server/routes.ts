import { initTRPC } from '@trpc/server';
// You can use any variable name you like.
// We use t to keep things simple.
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

// import { initTRPC } from '@trpc/server';

// /**
//  * Initialization of tRPC backend
//  * Should be done only once per backend!
//  */
// const t = initTRPC.create();

// /**
//  * Export reusable router and procedure helpers
//  * that can be used throughout the router
//  */
// export const router = t.router;
// export const publicProcedure = t.procedure;