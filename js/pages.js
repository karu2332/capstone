//
// table of pages
//
"use strict";

var pageTable = [
    // start page: page 0
    {
        downloadBegin: true,
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'green_grass.png',
                alt: 'Green Grass',
                transform: 'scale(1.3) translateY(8%)',
                opacity: '0.4',

            },
            {
                area: '2 / 4 / 10 / 10',
                html: `
Download Make Your Mark on your<br>
tablet before getting started!
`,
            },
            {
                area: '4 / 2',
                html: `
1.
`,
            },
            {
                area: '5 / 2',
                image: 'ios_share.png',
                alt: 'IOS Share Icon',
            },
            {
                area: '6 / 2 / 10 / 10',
                html: `
<span style="font-size: .6em">Tap<br>
'Share' button</span>
`,
            },
            {
                area: '4 / 5',
                html: `
2.
`,
            },
            {
                area: '5 / 5',
                image: 'add_home.png',
                alt: 'Add Home Screen Icon',
            },
            {
                area: '6 / 5 / 10 / 10',
                html: `
<span style="font-size: .6em">Choose<br>
'Add to<br>
Home Screen'</span>
`,
            },
            {
                area: '4 / 8',
                html: `
3.
`,
            },
            {
                area: '5 / 8',
                image: 'icon.png',
                alt: 'App Icon',
            },
            {
                area: '6 / 8 / 10 / 10',
                html: `
<span style="font-size: .6em">Open<br>
Make Your Mark on<br>
your device!</span>
`,
            },
        ],
    },
    // page 1
    {
        background: '#FADB8778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'make_your_mark.png',
                alt: 'Make Your Mark Title',
            },
            {
                area: '8 / 3 / 10 / 10',
                html: `
By: Skyler Hoeger, Claire O'Grady, and Katie Rudoff
`,
            },
        ],
    },
    // page 2
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'school_confetti_blueroad.png',
                alt: 'School',
                transform: 'translate(0, 8%)',
            },
            {
                area: '2 / 1 / 4 / 9',
                html: `
At DayDream Elementary school,<br>
the classrooms are filled with<br>
laughter, art, and imagination.
`,
            },
        ],
    },
    // page 3
    {
        elements: [
            {
                area: '1 / 1 / 8 / 10',
                image: 'school_halfblueroad.png',
                alt: 'School',
                opacity: '0.4',
                transform: 'scale(1.3) translate(0, -10%)',
            },
            {
                area: '4 / 7 / 9 / 10',
                image: 'charlotte_standing.png',
                alt: 'Charlotte',
                transform: 'scale(2.5) scaleX(-1)',
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
    // page 4
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
    // page 5
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
                transform: 'scale(1.01)',
            },
            {
                area: '2 / 1 / 5 / 10',
                html: `
Charlotte loves to draw with<br>
her colorful markers<br>
and paint with her<br>
prickly paint brushes.
`,
            },
            {
                area: '6 / 1 / 10 / 10',
                html: `
Her desk has the<br>
most art supplies<br>
in the entire school.
`,
            },
        ],
    },
    // page 6
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
                area: '2 / 1 / 4 / 9',
                html: `
Every morning Charlotte<br>
reaches for her favorite<br>
purple colored pencil, Penny.
`,
            },
            {
                area: '6 / 6 / 8 / 9',
                html: `
She uses Penny<br>
in every single one<br>
of her drawings.
`,
            },
        ],
    },
    // page 7
    {
        elements: [
            {
              area: '1 / 1 / 10 / 10',
              image: 'penny_on_desk.png',
              alt: 'Penny on Desk',
              transform: 'scale(1.3) translate(2%, 0)',
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
    // page 8
    {
        elements: [
            {
              area: '1 / 1 / 10 / 10',
              image: 'trace_in_cornerdesk.png',
              alt: 'Trace Inside Desk',
              transform: 'scale(1.1) translate(10%, 5%)',
            },
            {
                area: '2 / 1 / 4 / 9',
                html: `
But there is another<br>
pencil inside of Charlotte’s<br>
desk that she has never<br>
used before...
`,
            },
            {
                area: '6 / 1 / 10 / 10',
                html: `
...and this<br>
pencil’s name<br>
is Trace.
`,
            },
        ],
    },
    // page 9
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
              transform: 'scale(1.4) translate(-8%, 4%)',
            },
            {
                area: '9 / 9',
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
    // page 10
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
    // page 11
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'trace_back_corner.png',
                alt: 'Trace in Back Corner of Desk',
                transform: 'scale(1.7) translate(-2%, -10%)',
            },
            {
                area: '2 / 1 / 7 / 9',
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
    // page 12
    {
        elements: [
            {
                area: '2 / 2 / 10 / 10',
                image: 'trace_grey_confetti.png',
                alt: 'Trace Surrounded with Grey Confetti',
                transform: ' scale(1.2) translate(-18%, -8%)',
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
    // page 13
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
the paint brushes,<br>
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
    // page 14
    {
        goRight: true,
        elements: [
            {
                area: '1 / 1 / 8 / 10',
                image: 'traceinfrontschool.png',
                alt: 'School',
                transform: 'scale(1.5) translate(-5%, 5%)',
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
    // page 15
    {
        elements: [
            {
                area: '1 / 1 / 8 / 10',
                image: 'school_open_door.png',
                alt: 'School',
                opacity: 0.4,
                transform: 'scale(2.0)',
            },
            {
                area: '8 / 8',
                image: 'trace_sad_arms.png',
                alt: 'Trace',
                transform: 'scale(8)',
            },
            {
                area: '2 / 1 / 10 / 10',
                html: `
Trace needs to find<br>
his creativity. Help him<br>
navigate outside of DayDream<br>
Elementary for the first<br>
time ever and explore the<br>
world for inspiration.
`,
            },
        ],
    },
    // page 16
    {
        background: '#FADB8778',
        elements: [
            {
                area: '3 / 7',
                image: 'ticket_creation.png',
                alt: 'Train Ticket',
                transform: 'scale(10) rotate(30deg)',
            },
            {
                area: '4 / 1 / 10 / 10',
                html: `
It’s time to<br>
help Trace explore his<br>
creativity through music,<br>
and dance,<br>
and art,<br>
and writing.
`,
            },
        ],
    },
    // page 17
    {
        background: '#5ED4F778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'train-grass.png',
                alt: 'Train',
                transform: 'scale(1.4) translate(2%, -3%)',
            },
            {
                area: '2 / 5 / 10 / 10',
                html: `
Hop Aboard! Join Trace on the<br>
Inspiration Train where creativity<br>
is explored at every stop.
`,
            },
        ],
    },
    // page 18
    {
        background: '#78E06078',
        elements: [
            {
                area: '4 / 3',
                image: 'ticket_rockandroll.png',
                alt: 'Rock and Roll Train Ticket',
                transform: 'scale(10) rotate(90deg) translateX(40%)',
            },
            {
                area: '1 / 7',
                image: 'ticket_rockandroll.png',
                alt: 'Rock and Roll Train Ticket',
                transform: 'scale(10) rotate(90deg) translateX(5%)',
            },
            {
                area: '2 / 2 / 10 / 10',
                html: `
First stop is the<br>
Rock and Roll River!
`,
            },
        ],
    },
    // page 19
    {
        noSwipe: true,
        background: '#AB5AED78',
        elements: [
            // first group of notes
            {
                area: '3 / 1',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(9deg)',
            },
            {
                area: '3 / 3',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(9deg)',
            },
            {
                area: '4 / 2',
                image: 'music_note_1.png',
                alt: 'Eighth Notes',
                transform: 'rotate(-20deg) translateY(-30%)',
            },
            // second group of notes
            {
                area: '6 / 4',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(-10deg)',
            },
            {
                area: '6 / 6',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(15deg), translateY(-30%)',
            },
            {
                area: '6 / 5',
                image: 'music_note_1.png',
                alt: 'Eighth Notes',
                transform: 'rotate(-10deg) translateY(-30%)',
            },
            // third group of notes
            {
                area: '7 / 9',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(5deg)',
            },
            {
                area: '6 / 8',
                image: 'music_note_1.png',
                alt: 'Eighth Notes',
                transform: 'rotate(20deg) translateX(40%)',
            },
            // fourth group of notes
            {
                area: '2 / 9',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(-10deg)',
            },
            {
                area: '3 / 9',
                image: 'music_note_1.png',
                alt: 'Eighth Notes',
                transform: 'rotate(5deg)',
            },
            {
                area: '3 / 1 / 10 / 5',
                image: 'electric_guitar.png',
                alt: 'Electric Guitar',
                audio: 'guitar.wav',
                transform: 'rotate(-10deg)',
            },
            {
                area: '6 / 5 / 10 / 9',
                image: 'drumsticks.png',
                alt: 'Drumsticks',
                audio: 'drums.wav',
                transform: 'rotate(30deg)',
            },
            {
                area: '2 / 4 / 7 / 10',
                image: 'keyboard.png',
                alt: 'Keyboard',
                audio: 'piano.wav',
            },
            {
                area: '2 / 2 / 3 / 10',
                html: `
Music is always being created at the  Rock and Roll River.
`,
            },
            {
                area: '9 / 3 / 8 / 6',
                html: `
Tap your favorite instrument!
`,
            },
        ],
    },
    // page 20
    {
        background: '#68B55678',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'river_02.png',
                alt: 'Rock and Roll River',
                transform: 'scale(1.27)',
            },
            {
                area: '5 / 5 / 10 / 10',
                html: `
The alligators are<br>
always performing their<br>
favorite instruments.
`,
            },
        ],
    },
    // page 21
    {
        background: '#68B55678',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'river_02.png',
                alt: 'Rock and Roll River',
                transform: 'scale(1.27)',
            },
            {
                area: '6 / 3',
                image: 'fish.png',
                alt: 'Fish',
                transform: 'scale(4)',
            },
            {
                area: '6 / 6 / 10 / 10',
                html: `
The fish practice<br>
their songs until they<br>
all sing in harmony.
`,
            },
        ],
    },
    // page 22
    {
        background: '#68B55678',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'otters.png',
                alt: 'Otters',
                transform: 'scale(1.27)',
            },
            {
                area: '2 / 7 / 10 / 10',
                html: `
The otters dance<br>
to the music played<br>
by all their friends.
`,
            },
        ],
    },
    // page 23
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'otters.png',
                alt: 'Otters',
                opacity: 0.3,
                transform: 'scale(2.7) translate(2%, -21%)',
            },
            {
                area: '3 / 4 / 10 / 10',
                image: 'trace_music.png',
                alt: 'Trace Playing Music',
                transform: 'scale(0.75) translateY(-25%)',
            },
            {
                area: '3 / 2 / 10 / 10',
                html: `
Trace has never heard<br>
so much music before.

`,
            },
            {
                area: '5 / 2 / 10 / 10',
                html: `
He always thought that<br>
only musicians could make music.<br>

`,
            },
        ],
    },
    // page 24
    {
        noSwipe: true,
        background: '#5ED4F778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'keyboard.png',
                alt: 'Keyboard',
                transform: 'scale(1.2)',
                keyboard: true,
            },
            {
                area: '7 / 1',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(-10deg)',
            },
            {
                area: '7 / 2',
                image: 'music_note_1.png',
                alt: 'Eighth Note',
                transform: 'rotate(5deg) translate(-20%, 50%)',
            },
            {
                area: '2 / 9',
                image: 'music_note_1.png',
                alt: 'Eighth Note',
                transform: 'rotate(10deg) translate(60%, 50%)',
            },
            {
                area: '3 / 9',
                image: 'music_note_2.png',
                alt: 'Quarter Note',
                transform: 'rotate(10deg) translate(110%, 30%)',
            },
            {
                area: '2 / 1 / 4 / 10',
                html: `
Now it’s your turn to play some music<br>
tap the keys and play anything you want.
`,
            },
            {
                area: '8 / 5 / 10 / 10',
                html: `
Show Trace what’s possible and<br>
give the Otters something to<br>
dance too!
`,
            },
        ],
    },
    // page 25
    {
        background: '#FADB8778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'cloud.png',
                alt: 'Trace Thought Bubble',
                transform: 'translate(-13%, 2%)',
            },
            {
                area: '6 / 6 / 10 / 10',
                html: `
Bravo!
`,
            },
            {
                area: '7 / 6 / 10 / 10',
                html: `
You showed Trace anyone can<br>
make music if they allow their<br>
imagination to guide the way.
`,
            },
        ],
    },
    // page 26
    {
        background: '#5ED4F778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'train-grass.png',
                alt: 'Train',
                transform: 'scale(1.4) translate(2%, -3%)',
            },
            {
                area: '2 / 4 / 10 / 10',
                html: `
But Trace’s journey<br>
isn’t over yet.
`,
            },
            {
                area: '3 / 7 / 10 / 10',
                html: `
Hop back on the<br>
Inspiration Train<br>
to Art Avenue.
`,
            },
        ],
    },
    // page 27
    {
        background: '#5ED4F778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'art_avenue.png',
                alt: 'Art Avenue',
                transform: 'scale(1.3)',
            },
            {
                area: '2 / 1 / 10 / 10',
                html: `
Art Avenue is full<br>
of bright colors<br>
and amazing ideas.
`,
            },
        ],
    },
    // page 28
    {
        background: '#5ED4F778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'art-avenue-01.png',
                alt: 'Art Avenue',
                opacity: 0.1,
                transform: 'scale(1.3) translateY(-10%)',
            },
            {
                area: '1 / 1 / 10 / 10',
                image: 'green_grass.png',
                alt: 'Green Grass',
                transform: 'scale(1.3) translateY(2%)',
            },
            {
                area: '1 / 1 / 10 / 10',
                image: 'sun.png',
                alt: 'Orange Sun',
                transform: 'scale(0.9) translate(-30%, -10%)',
            },
            {
                area: '1 / 1 / 10 / 10',
                image: 'clouds_group_2.png',
                alt: 'Clouds',
                transform: 'scale(0.7) translate(60%, -40%)',
            },
            {
                area: '2 / 5 / 10 / 10',
                html: `
The sun is painted with yellow<br>
and orange strokes.
`,
            },
            {
                area: '5 / 5 / 10 / 10',
                html: `
The grass is filled with sharp<br>
and thick triangles.
`,
            },
        ],
    },
    // page 29
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'art-avenue-01.png',
                alt: 'Art Avenue',
                opacity: 0.1,
                transform: 'scale(3.7) translate(15%, -26%)',
            },
            {
                area: '2 / 3 / 10 / 10',
                image: 'blank_easel_02.png',
                alt: 'Easel',
                transform: 'scale(1)',
            },
            {
                area: '6 / 1 / 10 / 10',
                html: `
Anyone who enters<br>
Art Avenue must create<br>
something of their own to add<br>
to the collection of art.
`,
            },
        ],
    },
    // page 30
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'art_avenue.png',
                alt: 'Art Avenue',
                opacity: 0.1,
                transform: 'scale(3.7) translate(6%, -26%)',
            },
            {
                area: '5 / 5 / 10 / 10',
                image: 'trace_sad.png',
                alt: 'Sad Trace',
                transform: 'scale(1.5) translateY(-10%)',
            },
            {
                area: '2 / 2 / 10 / 10',
                html: `
Trace doesn’t think that he can<br>
add anything to Art Avenue<br>
becuase he has never drawn before.
`,
            },
            {
                area: '5 / 2 / 10 / 10',
                html: `
He remembers how Charlotte<br>
thought he would never be able<br>
to create anything when she<br>
drew with him.
`,
            },
        ],
    },
    // page 31
    {
        noSwipe: true,
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'art-avenue-01.png',
                alt: 'Art Avenue',
                opacity: 0.3,
                transform: 'scale(6) translate(5%, -30%)',
            },
            {
                area: '1 / 2 / 10 / 10',
                image: 'blank-easel.png',
                alt: 'Easel',
                transform: 'scale(1.3)',
            },
            {
                area: '1 / 4 / 10 / 10',
                draw: 'input',
                transform: 'scale(0.85)',
            },
            {
                area: '2 / 1 / 10 / 4',
                html: `
Help Trace add<br>
to Art Avenue.
`,
            },
            {
                area: '5 / 1 / 10 / 4',
                html: `
Use your<br>
creativity to<br>
draw anything<br>
you can imagine!
`,
            },
        ],
    },
    // page 32
    {
        showDrawing: true,
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'art-avenue-01.png',
                alt: 'Art Avenue',
                opacity: 0.1,
                transform: 'scale(3.7) translate(6%, -26%)',
            },
            {
                area: '2 / 1 / 10 / 10',
                image: 'blank_easel_02.png',
                alt: 'Filled Easel',
                transform: 'scale(1)',
            },
            {
                area: '4 / 4 / 7 / 7',
                draw: 'output',
                transform: 'scale(1.1) translateY(10%)',
            },
            {
                area: '5 / 7/ 10 / 10',
                image: 'happy_trace.png',
                alt: 'Happy Trace',
                transform: 'scale(1.75) translateY(-20%)',
            },
            {
                area: '2 / 1 / 10 / 10',
                html: `
You just used your imagination<br>
to show Trace that he has<br>
always been able to draw<br>
and create art!
`,
            },
            {
                area: '6 / 1 / 10 / 10',
                html: `
He just needed to<br>
believe in himself.
`,
            },
        ],
    },
    // page 33
    {
        background: '#5ED4F778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'green_train.png',
                alt: 'Train',
                transform: 'scale(1.4) translate(2%, -3%)',
            },
            {
                area: '2 / 3 / 10 / 10',
                html: `
Great job helping Trace<br>
find his imagination<br>
with music and art!
`,
            },
            {
                area: '3 / 7 / 10 / 10',
                html: `
Hop back aboard<br>
for one more stop!
`,
            },
        ],
    },
    // page 34
    {
        background: '#78E06078',
        elements: [
            {
                area: '4 / 2 / 10 / 10',
                image: 'ticket_story_street.png',
                alt: 'Story Street Train Ticket',
                transform: 'scale(1.5) rotate(360deg) translate(-5%, -10%)',
            },
            {
                area: '1 / 4 / 10 / 10',
                image: 'ticket_story_street.png',
                alt: 'Story Street Train Ticket',
                transform: 'scale(1.2) rotate(360deg) translate(40%, -42%)',
            },
            {
                area: '2 / 2 / 10 / 10',
                html: `
The last stop is<br>
Story Street.
`,
            },
        ],
    },
    // page 35
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'story_street.png',
                alt: 'Story Street',
                opacity: 0.3,
                transform: 'scale(2.6) translate(-11%, -9%)',
            },
            {
              area: '5 / 7 / 8 / 10',
              image: 'bookshelf.png',
              alt: 'Story Street Bookshelf',
              transform: 'scale(2.8) translate(-18%, 11%)',
            },
            {
                area: '3 / 1 / 10 / 10',
                html: `
Story Street is full of all<br>
different kinds of books with<br>
creative writing.
`,
            },
        ],
    },
    // page 36
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'bookshelf.png',
                alt: 'Story Street Bookshelf',
                opacity: 0.1,
                transform: 'scale(4.6) translate(-6%, 15%)',
            },
            {
              area: '1 / 1 / 10 / 10',
              image: 'open_book.png',
              alt: 'Open Book',
              transform: 'translate(20%, 5%)',
            },
            {
                area: '2 / 1 / 10 / 10',
                html: `
Those living at story street use<br>
their imagination to<br>
write stories with<br>
unique characters<br>
and exciting plots.
`,
            },
        ],
    },
    // page 37
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'bookshelf_openbook.png',
                alt: 'Story Street Bookshelf',
                opacity: 0.2,
                transform: 'scale(3.8) translate(-3%, 13%)',
            },
            {
              area: '5 / 2 / 10 / 10',
              image: 'trace_surprised.png',
              alt: 'Surprised Trace',
              transform: 'translate(-25%, -38%)',
            },
            {
                area: '2 / 2 / 10 / 10',
                html: `
They use their creativity in a<br>
way that Trace has never<br>
seen before.
`,
            },
        ],
    },
    // page 38
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'story_street.png',
                alt: 'Story Street',
                opacity: 0.3,
                transform: 'scale(2.6) translate(-20%, -10%)',
            },
            {
              area: '6 / 3 / 10 / 10',
              image: 'bookshelf_open_confetti.png',
              alt: 'Story Street Bookshelf with Confetti',
              transform: 'scale(2.8) translate(-22%, -10%)',
            },
            {
                area: '4 / 7 / 10 / 10',
                html: `
They don't draw or<br>
paint or make<br>
music, but writing<br>
uses just as much<br>
imagination and<br>
creativity!
`,
            },
        ],
    },
    // page 39
    {
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'bookshelf_openbook.png',
                alt: 'Story Street Bookshelf',
                opacity: 0.2,
                transform: 'scale(3.8) translate(-3%, 15%)',
            },
            {
              area: '5 / 2 / 10 / 10',
              image: 'happy_trace.png',
              alt: 'Happy Trace',
              transform: 'translate(-10%, -38%)',
            },
            {
                area: '2 / 2 / 10 / 10',
                html: `
After traveling with Trace to<br>
the Rock and Roll River,<br>
and Art Avenue,<br>
and Story Street...
`,
            },
            {
                area: '5 / 7 / 10 / 10',
                html: `
...you showed him<br>
that creativity is<br>
everywhere and<br>
within everyone. Your<br>
imagination is unique<br>
to you!
`,
            },
        ],
    },
    // page 40
    {
        noJump: true,
        noSwipe: true,
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'bookshelf_openbook.png',
                alt: 'Story Street Bookshelf',
                opacity: 0.2,
                transform: 'scale(3.8) translate(-3%, 15%)',
            },
            {
                area: '1 / 1 / 10 / 10',
                image: 'flat_book.png',
                alt: 'Flat Book',
                transform: 'translate(1%) scale(2)',
            },
            {
                area: '3 / 2 / 10 / 10',
                html: `
Time to stretch your<br>
creative muscles.
`,
            },
            {
                area: '5 / 2 / 10 / 10',
                html: `
Use this space to write<br>
about your journey with<br>
Trace or about<br>
anything you want...<br>
follow your imagination<br>
wherever it takes you!
`,
            },
            {
                area: '3 / 6 / 8 / 9',
                html: `
<textarea spellcheck="false"></textarea>
`,
            },
        ],
    },
    // page 41
    {
        noSwipe: true,
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'story_street.png',
                alt: 'Story Street',
                opacity: 0.1,
                transform: 'scale(2.8) translate(-8%, -10%)',
            },
            {
              area: '6 / 6 / 10 / 10',
              image: 'flat_book.png',
              alt: 'Story Street Story Book',
              transform: 'scale(2.5) translate(-10%, -25%)',
            },
            {
                area: '4 / 5 / 7 / 7',
                html: `
<span id="writing-output" style="font-family: 'Nunito', sans-serif; font-size: .5em; overflow-y: scroll"></span>
`,
            },
            {
                area: '2 / 1 / 10 / 5',
                html: `
You did it!
`,
            },
            {
                area: '4 / 1 / 10 / 5',
                html: `
Trace now knows<br>
that creativity was<br>
always within him<br>
because it is within<br>
EVERYONE!
`,
            },
        ],
    },
    // page 42
    {
        background: '#68B55678',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'river_confetti.png',
                alt: 'River Confetti',
                transform: 'scale(1.27)',
            },
            {
                area: '2 / 7 / 10 / 10',
                html: `
It is within the gators,<br>
and the fish,<br>
and the otters.
`,
            },
        ],
    },
    // page 43
    {
        elements: [
            {
                area: '1 / 3 / 10 / 10',
                image: 'charlotte_confetti.png',
                alt: 'Charlotte Surrounded by Confetti',
                transform: 'scale(1.5) translate(-2%, -3%)',
            },
            {
                area: '2 / 2 / 5 / 10',
                html: `
It is within Charlotte,<br>
and Penny,<br>
and the other<br>
art supplies!
`,
            },
        ],
    },
    // page 44
    {
        elements: [
            {
                area: '1 / 1 / 8 / 10',
                image: 'school_confetti_blueroad.png',
                alt: 'School',
                transform: 'scale(2.5) translate(-9%, 4%)',
                opacity: 0.1,
            },
            {
                area: '1 / 5 / 10 / 10',
                image: 'happy_trace.png',
                alt: 'Happy Trace',
                transform: 'scale(1) translate(15%, 10%)',
            },
            {
                area: '4 / 4 / 10 / 10',
                html: `
It is within Trace<br>
and YOU!
`,
            },
        ],
    },
    // page 45
    {
        background: '#78E06078',
        elements: [
            {
                area: '4 / 2 / 10 / 10',
                image: 'ticket_school.png',
                alt: 'School Train Ticket',
                transform: 'scale(1.7) rotate(330deg) translate(5%, -15%)',
            },
            {
                area: '2 / 1 / 10 / 10',
                html: `
Time to hop aboard the<br>
Inspiration Train and bring<br>
Trace back to Daydream<br>
Elementary...
`,
            },
            {
                area: '8 / 7 / 10 / 10',
                html: `
...but this isn't<br>
the last stop!
`,
            },
        ],
    },
    // page 46
    {
        background: '#5ED4F778',
        elements: [
            {
                area: '1 / 1 / 10 / 10',
                image: 'everyone_train.png',
                alt: 'Everyone on Train',
                transform: 'scale(1.4) translate(2%, -3%)',
            },
            {
                area: '2 / 4 / 10 / 10',
                html: `
The Inspiration Train<br>
never runs out of stops.<br>
`,
            },
            {
                area: '3 / 4 / 10 / 10',
                html: `
STAY ABOARD and let<br>
your creativity and<br>
imagination guide you forever!
`,
            },
        ],
    },
];
