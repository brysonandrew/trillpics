
export const init = async () => {
  const isEnabled = false &&
    !import.meta.env.DEV &&
    navigator.serviceWorker;
  if (isEnabled) {
    try {
      const path = '/service-worker.js';
      const sw: ServiceWorkerContainer =
        navigator.serviceWorker;
      await sw.register(path, {
        scope: '/',
      });
      sw.ready.then((registration) => {
        if (!registration.active) return null;
      });
    } catch (error) {
      console.log(
        'ServiceWorker registration failed:',
        error,
      );
    }
  }
};
