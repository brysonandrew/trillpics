export const isDev = () =>
  process.env.npm_lifecycle_event?.includes(
    "app:server"
  );
