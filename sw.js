// service worker, required to make this an installable PWA
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs

"use strict";

const urlsToCache = [
    'index.html',
    'css/main.css',
    'js/contact.min.js',
    'js/main.js',
    'js/pages.js',
    'img/arrow-right.png',
    'img/art_supplies.png',
    'img/charlotte_standing.png',
    'img/charlottes_desk_full.png',
    'img/desk_closed.png',
    'img/fast_forward.png',
    'img/full_desk_no_penny.png',
    'img/hand_and_penny.png',
    'img/house.png',
    'img/icon.png',
    'img/monster_drawing_desk.png',
    'img/page5_pennyinhand.png',
    'img/rewind.png',
    'img/school_confetti_blueroad.png',
    'img/school_halfblueroad.png',
];
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
