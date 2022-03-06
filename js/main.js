//
// main javascript code for Make Your Mark
//

"use strict";

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
                audio.play();
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
        $('#go-right').show();
    } else {
        $('#right').show();
        $('#go-right').hide();
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
