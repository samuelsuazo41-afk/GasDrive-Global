const CACHE = 'gasdrive-v9.6.13'; // Subida de versión por cambio de estructura
const FILES = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',

  // SVG de señales - sigue en /data/
  './data/senales_svg.js',

  // PREGUNTAS JSON - NUEVA RUTA /content/preguntas/
  './content/preguntas/senales.json',
  './content/preguntas/normas.json',
  './content/preguntas/mecanica.json',
  './content/preguntas/auxilios.json',
  './content/preguntas/medioambiente.json',
  './content/preguntas/situaciones.json',

  // PDFs Temario - raíz
  './01_Senales_Tomo_I_RD_465_2025.pdf',
  './02_Normas_Circulacion_Tomo_II_Edicion_2024.pdf',
  './03_Manual_IX_Primeros_Auxilios_2025.pdf',
  './04_Manual_VIII_Mecanica_2024.pdf',
  './05_Medio_Ambiente_Distintivos_DGT_2025.pdf'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES))
      .catch(err => console.log('SW cache error:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || e.request.url.startsWith('chrome-extension')) return;
  
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(response => {
        if (response.status === 200 && e.request.url.startsWith(self.location.origin)) {
          const responseClone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, responseClone));
        }
        return response;
      }).catch(() => {
        if (e.request.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});