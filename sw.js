// LARA PRO – minimaler Service Worker: nötig, damit Chrome die Startseite als App installiert.
// Er speichert nichts zwischen; alle Anfragen gehen unverändert ins Netz.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) { e.respondWith(fetch(e.request)); });
