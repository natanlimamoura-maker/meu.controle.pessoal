const CACHE_NAME = 'clarity-v-final-ultra'; // Mudei o nome aqui para forçar o reset
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', e => {
  self.skipWaiting(); // Força o novo Service Worker a assumir o controle na hora
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
