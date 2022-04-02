// service worker, required to make this an installable PWA
// https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs

"use strict";

const urlsToCache = [
    'index.html',
    'audio/drums.wav',
    'audio/guitar.wav',
    'audio/piano.wav',
    'css/main.css',
    'css/simpleDraw.css',
    'js/Tone.js',
    'js/jquery-3.6.0.min.js',
    'js/jquery.waitforimages.min.js',
    'js/jquerySwipeHandler.js',
    'js/main.js',
    'js/pages.js',
    'js/simpleDraw.js',
    'imgadd_home.png',
    'imgarrow-right.png',
    'imgart-avenue-01.png',
    'imgart_avenue.png',
    'imgart_supplies.png',
    'imgblank-easel.png',
    'imgblank_easel_02.png',
    'imgbookshelf.png',
    'imgbookshelf_open_confetti.png',
    'imgbookshelf_openbook.png',
    'imgbookshelf_trace.png',
    'imgcharlotte_confetti.png',
    'imgcharlotte_standing.png',
    'imgcharlottes_desk_full.png',
    'imgcloud.png',
    'imgclouds_group_2.png',
    'imgcoloredpencil_purple_arms.png',
    'imgdesk_closed.png',
    'imgdrumsticks.png',
    'imgelectric_guitar.png',
    'imgeraser.svg',
    'imgeveryone_train.png',
    'imgfast_forward.png',
    'imgfish.png',
    'imgflat_book.png',
    'imgfull_desk_no_penny.png',
    'imggreen_grass.png',
    'imggreen_train.png',
    'imghand_and_penny.png',
    'imghappy_trace.png',
    'imghouse.png',
    'imgicon.png',
    'imgios_share.png',
    'imgkeyboard.png',
    'imgmonster_drawing_desk.png',
    'imgmusic_note_1.png',
    'imgmusic_note_2.png',
    'imgopen_book.png',
    'imgotters.png',
    'imgpage5_pennyinhand.png',
    'imgpenny_on_desk.png',
    'imgrewind.png',
    'imgriver_02.png',
    'imgriver_confetti.png',
    'imgschool_confetti_blueroad.png',
    'imgschool_halfblueroad.png',
    'imgschool_open_door.png',
    'imgstory_street.png',
    'imgsun.png',
    'imgticket_creation.png',
    'imgticket_rockandroll.png',
    'imgticket_school.png',
    'imgticket_story_street.png',
    'imgtrace_and_art_supplies_.png',
    'imgtrace_back_corner.png',
    'imgtrace_color_confetti.png',
    'imgtrace_crying_ondesk.png',
    'imgtrace_grey_confetti.png',
    'imgtrace_in_cornerdesk.png',
    'imgtrace_music.png',
    'imgtrace_sad.png',
    'imgtrace_sad_arms.png',
    'imgtrace_surprised.png',
    'imgtraceinfrontschool.png',
    'imgtrain-grass.png',
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
