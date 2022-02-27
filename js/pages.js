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
                transform: 'translate(0, 8%)',
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
                transform: 'translate(10%, 10%) scale(1.5)',
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
    // page 5
    {
        elements: [
            {
                area: '1 / 1 / 9 / 10',
                image: 'full_desk_no_penny.png',
                alt: 'Full Desk',
                transform: 'scale(10)',
                opacity: '0.4',
            },
            {
                area: '9 / 1 / 2 / 6',
                image: 'hand_and_penny.png',
                alt: 'Penny in Hand',
                transform: 'scale(2)',
            },
            {
                area: '1 / 1 / 4 / 9',
                html: `
Every morning Charlotte<br>
reaches for her favorite<br>
purple colored pencil, Penny.
`,
            },
            {
                area: '6 / 7 / 8 / 9',
                html: `
She uses Penny<br>
in every single one<br>
of her drawings.
`,
            },
        ],
    },
    // page 6
    {
        elements: [
            {
              area: '1 / 1 / 10 / 10',
              image: 'penny_on_desk.png',
              alt: 'Penny on Desk',
              transform: 'scale(1.5) translate(2%, 0)',
            },
            {
                area: '2 / 2 / 6 / 9',
                html: `
Penny creates yummy fruit,<br>
and friendly monsters,<br>
and gigantic galaxies.
`,
            },
        ],
    },
    // page 7
    {
        elements: [
            {
              area: '1 / 1 / 10 / 10',
              image: 'trace_in_cornerdesk.png',
              alt: 'Trace Inside Desk',
              transform: 'translate(28%, 0)',
            },
            {
                area: '2 / 2 / 4 / 9',
                html: `
But there is another<br>
pencil inside of Charlotte’s<br>
desk that she has never<br>
used before...
`,
            },
            {
                area: '6 / 2 / 10 / 10',
                html: `
...and this<br>
pencil’s name<br>
is Trace.
`,
            },
        ],
    },
    // page 8
    {
        elements: [
            {
                area: '1 / 9',
                image: 'desk_closed.png',
                alt: 'Closed Desk',
                transform: 'scale(14) translate(0, -5%)',
                opacity: '0.4',
            },
            {
              area: '1 / 1 / 10 / 10',
              image: 'trace_crying_ondesk.png',
              alt: 'Trace Crying on Desk ',
              transform: 'translate(-20%, -15%)',
            },
            {
                area: '9 / 10',
                image: 'desk_closed.png',
                alt: 'Closed Desk',
                transform: 'scale(14) translate(0, 15%)',
                opacity: '0.4',
            },
            {
                area: '5 / 6 / 4 / 9',
                html: `
Charlotte never uses<br>
Trace because she<br>
doesn’t think that he<br>
can create anything<br>
as beautiful as her<br>
other art supplies.
`,
            },
        ],
    },
    // page 9
    {
        elements: [
            {
                area: '1 / 4',
                image: 'desk_closed.png',
                alt: 'Closed Desk',
                transform: 'scale(14) translate(0, -14%)',
                opacity: '0.4',
            },
            {
                area: '4 / 5',
                image: 'trace_and_art_supplies_.png',
                alt: 'Closed Desk',
                transform: 'scale(9) translate(23%, 17%)',
            },
            {
                area: '2 / 2 / 7 / 9',
                html: `
Because Charlotte never<br>
uses Trace, he sits in the back<br>
of her desk and watches all<br>
of his friends create<br>
amazing art.
`,
            },
        ],
    },
    // page 10
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'trace_back_corner.png',
                alt: 'Trace in Back Corner of Desk',
                transform: 'scale(2) translate(-2%, -11%)',
            },
            {
                area: '2 / 2 / 7 / 9',
                html: `
Trace started to believe that<br>
he would never be as creative as<br>
the paint brushes,<br>
and markers,<br>
and crayons,<br>
and colored pencils.
`,
            },
        ],
    },
    // page 11
    {
        elements: [
            {
                area: '2 / 2 / 10 / 10',
                image: 'trace_grey_confetti.png',
                alt: 'Trace Surrounded with Grey Confetti',
                transform: 'translate(-22%, -11%)',
            },
            {
                area: '5 / 7 / 10 / 10',
                html: `
Trace feels like<br>
he does not know<br>
how to use his<br>
imagination anymore.
`,
            },
        ],
    },
    // page 12
    {
        elements: [
            {
                area: '2 / 6',
                image: 'trace_color_confetti.png',
                alt: 'Trace Surrounded with Color Confetti',
                transform: 'scale(9) translate(15%, 35%)',
            },
            {
                area: '2 / 1 / 10 / 10',
                html: `
But what Trace<br>
doesn't know is that<br>
he can be just<br>
as creative as<br>
the paint brushes<br>,
and markers,<br>
and crayons,<br>
and colored pencils....
`,
            },
            {
                area: '7 / 1 / 10 / 10',
                html: `
...but HE NEEDS YOUR HELP!
`,
            },
        ],
    },
    // page 13
    {
        elements: [
            {
                area: '1 / 1 / 8 / 10',
                image: 'traceinfrontschool.png',
                alt: 'School',
                transform: 'scale(1.5) translate(-10%, 3%)',
            },
            {
                area: '3 / 4 / 10 / 10',
                html: `
Trace needs you to<br>
join him on a journey<br>
to unlock the creativity and<br>
imagination he has<br>
always had!<br>
`,
            },
        ],
    },
];
