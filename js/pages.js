//
// table of pages
//
"use strict";

var pageTable = [
    // start page: page 0
    {
        elements: [
            {
                area: '3 / 3 / 10 / 10',
                html: `
Welcome.<br>
Info about app...<br>
Info about authors...<br>
How to save PWA to home screen...
`,
            },
        ],
    },
    // page 1
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'school_confetti_blueroad.png',
                alt: 'School',
            },
            {
                area: '1 / 1 / 4 / 9',
                html: `
At DayDream Elementary school,<br>
the classrooms are filled with<br>
laughter, art, and imagination.
`,
            },
        ],
    },
    // page 2
    {
        elements: [
            {
                area: '1 / 1 / 8 / 10',
                image: 'school_halfblueroad.png',
                alt: 'School',
                opacity: '0.4',
                transform: 'translate(0, -10%)',
            },
            {
                area: '4 / 4 / 9 / 10',
                image: 'charlotte_standing.png',
                alt: 'Charlotte',
                transform: 'scaleX(-1)',
            },
            {
                area: '7 / 2 / 9 / 10',
                html: `
Everyone loves to draw,<br>
and paint,<br> and create beautiful artwork.
`,
            },
        ],
    },
    // page 3
    {
        elements: [
            {
                area: '2 / 2 / 9 / 9',
                image: 'art_supplies.png',
                alt: 'Art Supplies',
            },
            {
                area: '1 / 1 / 4 / 9',
                html: `
Everyday the kids use their markers,<br>
and paint brushes,<br>
and crayons,<br>and colored pencils.
`,
            },
        ],
    },
    // page 4
    {
        elements: [
            {
                area: '1 / 6',
                image: 'desk_closed.png',
                alt: 'Closed Desk',
                transform: 'scale(7)',
                opacity: '0.4',
            },
            {
                area: '3 / 9',
                image: 'desk_closed.png',
                alt: 'Closed Desk',
                transform: 'scale(7)',
                opacity: '0.4',
            },
            {
                area: '5 / 6',
                image: 'full_desk_no_penny.png',
                alt: 'Full Desk',
                transform: 'scale(8)',
            },
            {
                area: '2 / 1 / 9 / 10',
                image: 'charlotte_standing.png',
                alt: 'Charlotte',
            },
            {
                area: '2 / 2 / 5 / 10',
                html: `
Charlotte loves to draw with<br>
her colorful markers<br>
and paint with her<br>
prickly paint brushes.
`,
            },
            {
                area: '6 / 2 / 10 / 10',
                html: `
Her desk has the<br>
most art supplies<br>
in the entire school.
`,
            },
        ],
    },
];
