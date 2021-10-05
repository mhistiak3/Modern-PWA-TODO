let cacheData = "appV1";
// Event for caches files for runnig in offline
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/vendors~main.chunk.js",
        "index.html",
        "/",
        "/manifest.json",
        "/static/media/logo.29f81146.png",
      ]);
    })
  );
});


this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestURL = event.request.clone();
        return fetch(requestURL);
      })
    );
  }
});
