// minimale service worker: alleen nodig zodat Chrome 'Installeren' aanbiedt. Alles gaat gewoon via internet.
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
