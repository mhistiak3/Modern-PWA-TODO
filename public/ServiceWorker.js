let cacheData = "todo_v_1.0.0";
// Event for caches files for runnig in offline

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "https://ia-todo.netlify.app/static/js/2.3c51dae2.chunk.js",
        "https://ia-todo.netlify.app/static/js/main.1aacd3ad.chunk.js",
        "https://ia-todo.netlify.app/static/css/main.dfc17785.chunk.css",
        "index.html",
        "/manifest.json",
        "/static/media/logo.29f81146.png",
        "https://ia-todo.netlify.app/",
        "https://ia-todo.netlify.app/static/media/bg.ed6cb335.jpg",
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
