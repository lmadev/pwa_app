let cacheName = "pwa-lmacode-dev"
let  appShellFiles = [
    '/img/icon_16x16.png',
    '/img/icon_144x144.png',
    '/img/icon_512x512.png',
    '/build/app.js',
    '/build/app1.js',
]

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
            console.log(appShellFiles)
            return cache.addAll(appShellFiles);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((r) => {
            console.log('[Service Worker] Fetching resource: '+e.request.url);
            return r || fetch(e.request).then((response) => {
                return caches.open(cacheName).then((cache) => {
                    console.log('[Service Worker] Caching new resource: '+e.request.url);
                    if((e.request.url.indexOf('http') === 0)) {
                        cache.put(e.request, response.clone());
                    }
                    return response;
                });
            });
        })
    );
});