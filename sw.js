const VERSION = "dash-v4";
const SHELL = ["./", "./index.html", "./config.js", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== VERSION).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Datos de Google Sheets: siempre a la red (el respaldo offline está en la app).
  if (url.hostname.endsWith("google.com") || url.hostname.endsWith("googleusercontent.com")) return;
  const save = res => { if (res.ok || res.type === "opaque") { const c = res.clone(); caches.open(VERSION).then(x => x.put(e.request, c)); } return res; };
  if (url.origin === self.location.origin) {
    // Archivos propios: primero la red, así cada cambio en GitHub aparece al abrir.
    e.respondWith(fetch(e.request).then(save).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
  } else {
    // Librerías y fuentes: primero caché.
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(save)));
  }
});
