const CACHE_NAME = "mercado-somoto-v1";

const urlsToCache = [
  "index.html",
  "manifest.json",
  "49.jpeg",
  "31.jpeg",
  "47.jpeg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});