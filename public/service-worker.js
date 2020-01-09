var cacheName = "my-s4e-project-cache-" + Date.now()
var filesToCache = [
  "/",
  "/index.html",
  "/global.css",
  "/build/bundle.js",
  "/build/bundle.css",
  "/assets/svelte-logo-192x192.png",
  "/assets/svelte-logo-512x512.png",
  "favicon.png"
]
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache)
    })
  )
})
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName)
          }
        })
      )
    })
  )
})
self.addEventListener("fetch", e => {
  e.respondWith(
    (async function() {
      const response = await caches.match(e.request)
      return response || fetch(e.request)
    })()
  )
})
