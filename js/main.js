//
// main javascript code for Make Your Mark
//

"use strict";

// for keyboard tones
const synth = new Tone.Synth().toDestination();

// single page app, this controls which content appears, starting at page 0
let currentPage = 0;

// look up frequently used elements
const $main = document.getElementsByTagName('main')[0];
const $left = document.getElementById('left');
const $right = document.getElementById('right');
const $content = document.getElementById('content');

// left nav...
$('#left').on('click', navLeftClick);

function navLeftClick(event) {
    event.preventDefault();
    if (currentPage > 0) {
        pageExit(currentPage);
        currentPage--;
        pageEnter(currentPage);
        updateNavs();
    } else {
        console.log('already at first page');
    }
}

// right nav...
$('#right').on('click', navRightClick);
$('#go-right').on('click', navRightClick);
$('#download-begin').on('click', navRightClick);

function navRightClick(event) {
    event.preventDefault();
    if (currentPage < pageTable.length - 1) {
        pageExit(currentPage);
        currentPage++;
        pageEnter(currentPage);
        updateNavs();
    } else {
        console.log('already at last page');
    }
}

// hide left nav on first page, right nav on last page
function updateNavs() {
    if (currentPage === 0) {
        $left.style.opacity = 0;
    } else {
        $left.style.opacity = 1;
    }
    if (currentPage === pageTable.length - 1) {
        $right.style.opacity = 0;
    } else {
        $right.style.opacity = 1;
    }
}

// pre-draw all pages, with opacity 0
function drawAllPages() {
    $content.replaceChildren();
    for (let pageNum = 0; pageNum < pageTable.length; pageNum++) {
        console.log(`drawing page ${pageNum}`);
        const thisPage = pageTable[pageNum];
        const $page = document.createElement('div');
        $page.id = `page-${pageNum}`;
        $content.appendChild($page);
        $page.style.visibility = 'hidden';
        for (const el of thisPage.elements) {
            pageDrawElement($page, el);
        }
        if ('noSwipe' in thisPage) {
		        console.log(`no swipe for page ${pageNum}`);
	      } else {
            jquerySwipeHandler.handleSwipe(`#page-${pageNum}`, [
                jquerySwipeHandler.SWIPE_LEFT,
                jquerySwipeHandler.SWIPE_RIGHT,
                ], function (direction) {
                    console.log('swipe: ', direction);
                    switch (direction) {
                        case jquerySwipeHandler.SWIPE_LEFT:
                            $('#right').trigger('click');
                            break;
                        case jquerySwipeHandler.SWIPE_RIGHT:
                            $('#left').trigger('click');
                            break;
                    }
            });
        }
    }
}

let currentCounter = 1;    // used to generate unique ids
function counter() {
    return currentCounter++;
}

// called to draw an element on a page
function pageDrawElement($page, el) {
    const $div = document.createElement('div');
    $div.style.gridArea = el.area;
    $page.appendChild($div);

    if ('html' in el) {
        // element is some html
        console.log(`...add html element at ${el.area}: "${s40(el.html)}"`);
        $div.classList.add('html-element');
        $div.innerHTML = el.html;
    } else if ('image' in el) {
        // element is an image
        console.log(`add image element at ${el.area}: "${s40(el.image)}"`);
        $div.classList.add('image-element');
        const $img = document.createElement('img');
        $img.src = `img/${el.image}`;
        $img.alt = el.alt;
        $div.appendChild($img);

        if ('audio' in el) {
            console.log(`image audio ${el.audio}`);
            const url = `audio/${el.audio}`;
            const audio = new Audio(url);
            const id = `audio${counter()}`;
            $img.id = id;
            $(`#${id}`).on('click', (e) => {
                console.log(`click ${id}`);
                audio.play();
            });
        }
        if ('keyboard' in el) {
            console.log(`image keyboard`);
            const id = `keyboard${counter()}`;
            $img.id = id;
            $(`#${id}`).on('pointerdown', (e) => {
                const xy = clickXYPercent($(`#${id}`).get(0), e);
                console.log(`pointerdown ${id} ${xy.x} ${xy.y}`);
                synth.triggerAttackRelease(keyboardNote(xy.x, xy.y), '8n');
            });
        }
    } else if ('draw' in el) {
        $div.classList.add('image-element');
        if (el.draw === 'input') {
            // drawing input tool
            $div.id = 'draw-input';
            simpleDraw('#draw-input');
        } else {
            // show the drawing previously input
            $div.id = 'draw-output';
        }
    } else {
        console.log('unknown element type', el);
        return;
    }

    if ('transform' in el) {
        $div.style.transform = el.transform;
    }

    if ('opacity' in el) {
        $div.style.opacity = el.opacity;
    }
}

function clickXYPercent(el, ev) {
    const r = el.getBoundingClientRect();
    return {
        x: (ev.clientX - r.left) / r.width * 100,
        y: (ev.clientY - r.top) / r.height * 100
    }
}

// table of xPercent coordinates for the right edge of each key
// if a key is a sharp, it will only be on the upper keyboard
// otherwise, the right edge is different between upper and lower
// (due to the shape of the white piano keys)
const keyboardTable = [
    { note: 'C4', upper: 21.4, lower: 22.4 },
    { note: 'C#4', upper: 23.3 },
    { note: 'D4', upper: 25.2, lower: 25.7 },
    { note: 'D#4', upper: 27.4 },
    { note: 'E4', upper: 28.7, lower: 28.7 },
    { note: 'F4', upper: 31.1, lower: 32.1 },

    { note: 'F#4', upper: 32.8 },
    { note: 'G4', upper: 34.2, lower: 35.0 },
    { note: 'G#4', upper: 36.2 },
    { note: 'A4', upper: 37.3, lower: 38.2 },
    { note: 'A#4', upper: 39.5 },
    { note: 'B4', upper: 41.1, lower: 41.1 },
    { note: 'C5', upper: 43.0, lower: 44.4 },
    { note: 'C#5', upper: 45.3 },
    { note: 'D5', upper: 46.7, lower: 47.5 },
    { note: 'D#5', upper: 49.0 },
    { note: 'E5', upper: 50.4, lower: 50.6 },
    { note: 'F5', upper: 52.0, lower: 53.7 },
    { note: 'F#5', upper: 54.7 },
    { note: 'G5', upper: 56.1, lower: 56.7 },
    { note: 'G#5', upper: 58.1 },
    // keyboard exits reality at this point...
    { note: 'A5', upper: 59.9, lower: 60.0 },
    { note: 'A#5', upper: 61.8, lower: 63.1 },
    { note: 'B5', upper: 63.7 },
    { note: 'C6', upper: 65.5, lower: 66.1 },
    { note: 'C#6', upper: 67.4 },
    { note: 'D6', upper: 70.6, lower: 71.8 },
    { note: 'D#6', upper: 73.0 },
    { note: 'E6', upper: 74.9, lower: 75.0 },
    { note: 'F6', upper: 76.8, lower: 78.0 },
    { note: 'F#6', upper: 78.9 },
    { note: 'G6', upper: 80.2, lower: 80.9 },
    { note: 'G#6', upper: 82.2 },
    { note: 'A6', upper: 83.5, lower: 84.0 },
    { note: 'A#6', upper: 85.5 },
    { note: 'B6', upper: 87.2, lower: 87.2 },
    { note: 'C7', upper: 90.5, lower: 90.5 },
];

function keyboardNote(xPercent, yPercent) {
    if (xPercent < 19.5 || xPercent > 90.5) {
        // off the left or right edge, outside the key area
        return;
    }

    if (yPercent > 43.5 && yPercent < 52) {
        // upper keyboard where the sharps are
        for (const key of keyboardTable) {
            if (xPercent < key.upper) {
                console.log(`upper note ${key.note}`);
                return key.note;
            }
        }
    } else if (yPercent >= 52 && yPercent < 57.5) {
        // lower keyboard, white keys only
        for (const key of keyboardTable) {
            if (xPercent < key.lower) {
                console.log(`lower note ${key.note}`);
                return key.note;
            }
        }
    }
}

// delay in ms, example delay(1000) for one second
const delay = async ms => new Promise(res => setTimeout(res, ms));

// called to show a page when that page is entered
function pageEnter(pageNum) {
    console.log(`pageEnter(${pageNum})`);
    const $page = document.getElementById(`page-${pageNum}`);
    $page.style.visibility = 'visible';
    $page.style.opacity = 1;

    const thisPage = pageTable[pageNum];
    // check for properties that take effect every time we enter this page
    if ('showDrawing' in thisPage) {
        const w = $('#draw-output').width();
        const h = $('#draw-output').height();
        const m = Math.floor(Math.min(w - 4, h));
        console.log(`draw-output ${w} x ${h} -> ${m} x ${m}`);
        let ops = simpleDrawState.draw.shortops();
        let opsWidth = simpleDrawState.draw.width();
        let $canvas = $('<canvas>');
        let draw = new Draw($canvas, ops, true);
        draw.resize(m, m);
        $('#draw-output').empty().append($canvas);
        draw.scale(m/opsWidth);
        draw.animate();
    }
    if ('background' in thisPage) {
        console.log(`background ${thisPage.background}`)
        document.body.style.background = thisPage.background;
    } else {
        document.body.style.background = "#f8f5ed";
    }
    if ('goRight' in thisPage) {
        console.log('goRight');
        $('#right').hide();
        $('#download-begin').hide();
        $('#go-right').show();
    } else if ('downloadBegin' in thisPage) {
        $('#right').hide();
        $('#download-begin').show();
        $('#go-right').hide();
    } else {
        $('#right').show();
        $('#go-right').hide();
        $('#download-begin').hide();
    }
}

// called to remove all content elements when a page is exited
function pageExit(pageNum) {
    console.log(`pageExit(${pageNum})`);
    const $page = document.getElementById(`page-${pageNum}`);
    $page.style.opacity = 0;
    $page.style.visibility = 'hidden';
}

// summarize a string by showing the first 40 characters
// used for debugging messages
function s40(s) {
    let cleanS = s.replace(/\r?\n|\r/g, '\\n');
    if (cleanS.length < 40) {
        return cleanS;
    } else {
        return cleanS.substr(0, 37) + '...';
    }
}

// allow ?page=N to jump to a specific page
// used for debugging a specific page layout with repeated reloads
const searchParams = new URLSearchParams(window.location.search);
if (searchParams.has('page')) {
    const page = searchParams.get('page');
    if (page < 0 || page >= pageTable.length) {
        console.log(`ignoring invalid page parameter: ${page}`);
    } else {
        console.log(`jumping to page ${page}`);
        currentPage = page;
    }
}

// for debug, type a digit to jump to that page
// for example, pressing 0 jumps to the first page
document.addEventListener('keypress', function(event) {
    console.log(`keypress ${event.which}`);
    if (event.which >= 48 && event.which <= 57) {
        // digit
        jumpToPage(event.which - 48);
        event.preventDefault();
    } else if (event.which >= 97 && event.which <= 122) {
        // 'a' through 'z', 'a' is page 10 and so on
        jumpToPage(event.which - 97 + 10);
        event.preventDefault();
    } else if (event.which === 79) {
        // 'O' (capital O) turns on outline around elements
        const imgElements = document.querySelectorAll('.image-element');
        for (const element of imgElements) {
                element.style.outline = '1px solid blue';
        }
        const txtElements = document.querySelectorAll('.html-element');
        for (const element of txtElements) {
                element.style.outline = '1px solid pink';
        }
        event.preventDefault();
    }

});

// called to jump to a specific page number
// used for debugging
function jumpToPage(n) {
    console.log(`jump to page ${n}`);
    if (n >= pageTable.length) {
        console.log(`above highest page number ${pageTable.length - 1}`);
        return;
    }
    pageExit(currentPage);
    currentPage = n;
    pageEnter(currentPage);
    updateNavs();
}

// left and right arrow keys can be used for nav
document.addEventListener('keydown', function(event) {
    switch(event.which) {

    case 37: // left
        navLeftClick(event);
        break;

    case 38: // up
        // reload pageTable and redraw the current page
        // use this after editing pages.js
        reloadJS();
        break;

    case 39: // right
        navRightClick(event);
        break;

    case 40: // down
        break;

    default:
        // not handled by us
        return;
    }
    event.preventDefault();
});

// reload the pages.js file, used during development
async function reloadJS() {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    let src = `js/pages.js?${new Date().getTime()}`;
    console.log(`reloading ${src}`);
    script.src = src;
    head.appendChild(script);

    pageExit(currentPage);

    // give new js time to load
    await delay(1000);

    drawAllPages();
    pageEnter(currentPage);
    updateNavs();
}

// pre-draw all pages on start-up
drawAllPages();

// show the first page
pageEnter(currentPage);
updateNavs();
