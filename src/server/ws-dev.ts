// import { createContext } from './cc';
// import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { WebSocketServer } from 'ws';
// import { router } from '~/server/router';

// const wss = new WebSocketServer({
//   port: 3002,
// });
// const handler = applyWSSHandler({ wss, router, createContext });

// wss.on('connection', (ws) => {
//   console.log(`➕➕ Connection (${wss.clients.size})`);
//   ws.once('close', () => {
//     console.log(`➖➖ Connection (${wss.clients.size})`);
//   });
// });
// console.log('✅ WebSocket Server listening on ws://localhost:3002');

// process.on('SIGTERM', () => {
//   console.log('SIGTERM');
//   handler.broadcastReconnectNotification();
//   wss.close();
// });