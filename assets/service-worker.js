const VERSION_NUMBER = '0.2.3';
const CACHE_NAME = `v${VERSION_NUMBER}::gnd-service-worker`;
const resolveCache = async () => caches.open(CACHE_NAME);
const matchRequest = async (cache, request) => cache.match(request);
const putRequest = async (cache, request, response) => request.method === 'GET'
    ? cache.put(request, response)
    : null;
const sendMessage = async (message) => {
    const recipients = await self.clients.matchAll();
    recipients.forEach((client) => {
        client.postMessage(message);
    });
};
const precache = async (paths) => {
    const cache = await resolveCache();
    console.time('precache');
    await cache.addAll(paths);
    console.timeEnd('precache');
};
self.addEventListener('install', (event) => {
    const installHandlers = async () => {
        try {
            await precache(['/favicon.ico']);
        }
        catch (error) {
            console.error(error);
        }
    };
    event.waitUntil(installHandlers());
});
self.addEventListener('activate', (event) => {
    const deleteExpiredCaches = async () => {
        const names = await caches.keys();
        const deleteHandlers = names.reduce((a, cacheName) => {
            if (cacheName !== CACHE_NAME) {
                a.push(caches.delete(cacheName));
            }
            return a;
        }, []);
        await Promise.all(deleteHandlers);
    };
    const activateHandlers = async () => {
        try {
            await deleteExpiredCaches();
            self.clients.claim();
        }
        catch (error) {
            console.error(error);
        }
    };
    event.waitUntil(activateHandlers());
});
self.addEventListener('fetch', (event) => {
    const request = event.request;
    const acceptHeaders = request.headers.get('Accept');
    const isHtml = acceptHeaders?.includes('text/html') &&
        request.url.startsWith(location.origin);
    const cacheCopy = async () => {
        const cache = await resolveCache();
        let response = await fetch(request);
        try {
            const copy = response.clone();
            putRequest(cache, request, copy);
        }
        catch (error) {
            const cachedResponse = await matchRequest(cache, request);
            if (cachedResponse) {
                response = cachedResponse;
            }
        }
        finally {
            return response;
        }
    };
    const staleWhileRevalidate = async () => {
        const cache = await resolveCache();
        const cachedResponse = await matchRequest(cache, request);
        const networkResponsePromise = fetch(request);
        const updateCache = async () => {
            const networkResponse = await networkResponsePromise;
            const copy = networkResponse.clone();
            putRequest(cache, request, copy);
        };
        event.waitUntil(updateCache());
        return cachedResponse || networkResponsePromise;
    };
    const messageHandlers = async () => {
        if (isHtml) {
            return cacheCopy();
        }
        return staleWhileRevalidate();
    };
    try {
        event.respondWith(messageHandlers());
    }
    catch (error) {
        console.error(error);
    }
});
