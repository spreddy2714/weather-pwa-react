const CACHE_NAME='Weather-pwa-v1';
const URLS_TO_CACHE = ['index.html', 'offline.html'];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('CACHE OPENED');
            return cache.addAll(URLS_TO_CACHE);
        })
    )
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            return fetch(event.request)
            .catch((e) => {
                console.log(e);
                return caches.match('offline.html');
            });
        })
    )
});

self.addEventListener('activate' , (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName))
                {
                    return caches.delete(cacheName);
                }
            })
        })
    )
});