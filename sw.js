const CACHE = 'pedalo-v4';
// All'installazione non pre-cacchiamo nulla (app è un file singolo)
self.addEventListener('install', () => {
  self.skipWaiting();
});
// Pulizia vecchie cache
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});
// Cache-first con fallback network
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // API (Strava, GitHub) sempre dalla rete: mai servite dalla cache
  const h = new URL(e.request.url).hostname;
  if (h === 'api.github.com' || h === 'www.strava.com') return;
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const network = fetch(e.request).then(resp => {
          if (resp && resp.status === 200) {
            cache.put(e.request, resp.clone());
          }
          return resp;
        }).catch(() => cached);
        return cached || network;
      })
    )
  );
});
