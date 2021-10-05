let cacheData = "appV1";
// Event for caches files for runnig in offline
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "https://ia-todo.netlify.app/static/js/2.3c51dae2.chunk.js",
        "https://ia-todo.netlify.app/static/js/main.7f98cf7a.chunk.js",
        "https://ia-todo.netlify.app/static/css/main.38512767.chunk.css",
        "index.html",
        "/manifest.json",
        "/static/media/logo.29f81146.png",
        "https://ia-todo.netlify.app/",
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
