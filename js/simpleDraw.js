// SPDX-License-Identifier: BSD-3-Clause
//
// Copyright 2020, Andy Rudoff. All rights reserved.
//
// simpleDraw.js -- client-side js for simpleDraw
//

"use strict";

let simpleDrawState = {
	draw: null,		// Draw object for #draw canvas
	drawColor: '#000000',
	brush: 3,
	erasing: false,
};

//
// colorChosen -- react to user chosing a color
//
function colorChosen(color) {
	// if we were erasing, go back to previous width
	if (simpleDrawState.erasing) {
		simpleDrawState.erasing = false;
		brushChosen(simpleDrawState.brush);
	}
	simpleDrawState.draw.setDrawColor(color);
	simpleDrawState.drawColor = color;
	// brushes 2-6 are round drawing pens, change them to current color
	$('[id^=brush] span').not('#brush0 span')
		.css('background-color', color);
	if (color == "rgb(255, 255, 255)") {
		$('[id^=brush] span').css('border', '1px solid grey');
	} else {
		$('[id^=brush] span').css('border', 'none');
	}
}

//
// brushChosen -- react to user chosing a brush
//
function brushChosen(brush) {
	// brush 0 is special, it is the eraser
	if (brush == 0) {
		simpleDrawState.erasing = true;
		simpleDrawState.draw.setDrawWidth(24);
		simpleDrawState.draw.setDrawColor('#ffffff');
	} else {
		// take brush width from span clicked
		if (simpleDrawState.erasing) {
			simpleDrawState.erasing = false;
			simpleDrawState.draw.setDrawColor(simpleDrawState.drawColor);
		}
		simpleDrawState.brush = brush;
		let width = $(`#brush${brush} span`).css('border-radius');
		width = width.replace('px', '');
		width *= 2;
		simpleDrawState.draw.setDrawWidth(width);
	}
	$('[id^=brush]').css('outline', 'none');
	$(`#brush${brush}`).css('outline', '1px solid black');
}

//
// resizeHandler -- compute canvas size after a resize event
//
function resizeHandler() {
	// hack for safari viewport size
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	// see what size we are now and adjust canvas size
	document.body.height = window.innerHeight;
	const w = $('#draw-container').width();
	const h = $('#draw-container').height();
	const m = Math.floor(Math.min(w - 4, h));
	const z = Math.floor(m / 375);
	console.log(`${w}x${h} ${m} ${z}`);

	// XXX should adjust scale if in the middle of drawing
	simpleDrawState.draw.resize(m, m);
}

//
// wait -- wait the given time, called only by async functions
//
function wait(time) {
	return new Promise(resolve => {
		setTimeout(() => { resolve(); }, time);
	});
}

//
// pad -- add a leading zero if t is less than 10
//
function pad(t) {
	if (t < 10) {
		return '0' + t;
	}
	return t;
}

//
// Draw -- class managing the drawing (and replaying) on a canvas
//
class Draw {
	constructor(canvasSelector, ops=[], drawOnly=false) {
		this.$canvas = $(canvasSelector);
		this.ctx = this.$canvas[0].getContext('2d');
		this.down = false;
		this.drawColor = '#00ff00';
		this.drawWidth = 6;
		this.seconds = 0;
		// ops is every operation made since the Draw object was
		// created or since the last call to this.reset().
		//
		// when things like undo() and clear() are called, they append
		// records to ops to maintain the full timeline of what happened.
		//
		// it is possible to provide the ops at object creation time,
		// which means a call to animate() is expected to draw based
		// on those provided ops.
		this.ops = ops;
		// visibleOps is the list of operations to execute to recreate
		// the current canvas.
		//
		// when things like undo() and clear() are done by execute(),
		// records are removed from visibleOps as appropriate so it
		// contains just what is needed to draw the current canvas.
		this.visibleOps = [];

		if (!drawOnly) {
			// event listeners...
			this.$canvas.on('pointerdown', (e) => {
				this.down = true;
				let offset = this.$canvas.offset();
				this.logAndExecute({ what: 'start',
					x: e.clientX - offset.left,
					y: e.clientY - offset.top});
			})
			.on('pointermove', (e) => {
				if (this.down) {
					let offset = this.$canvas.offset();
					this.logAndExecute({ what: 'move',
						x: e.clientX - offset.left,
						y: e.clientY - offset.top});
				}
			})
			.on('pointerup', (e) => {
				this.down = false;
			})
			.on('pointerout', (e) => {
				this.down = false;
			});
		}

		// arrow functions unsupported in safari so
		// create it during the constructor
		this.updateTime = () => {
			if (this.seconds > 0) {
				this.seconds--;

				if (this.seconds == 0) {
					stateMachine.event({type: 'TIMEOUT'}, undefined);
				}
			}

			if (this.seconds == 0) {
				$('#timer span').html('');
			} else {
				// timer still ticking, update the screen
				let minutes = Math.floor(this.seconds / 60);
				let timer = '';
				if (minutes > 0) {
					timer += minutes;
				}
				timer += ':' + pad(this.seconds % 60);
				$('#timer span').html(timer);

				setTimeout(this.updateTime, 1000);
			}
		}

		this.canvasInit();
	}

	// internal functions...
	canvasInit() {
		this.down = false;
		this.ctx.clearRect(0, 0,
				this.$canvas[0].width, this.$canvas[0].height);
		this.drawColor = '#00ff00';
		this.ctx.fillStyle = this.drawColor;
		this.ctx.strokeStyle = this.drawColor;
		this.drawWidth = 6;
		this.ctx.lineWidth = this.drawWidth;
		this.ctx.lineCap = 'round';
		this.ctx.lineJoin = 'round';
		this.ctx.globalCompositeOperation = 'source-over';
	}
	execute(op, record) {
		switch(op.what) {
		case 'start':
			this.ctx.beginPath();
			this.ctx.arc(op.x, op.y, this.drawWidth / 2, 0,
				Math.PI * 2, false);
			this.ctx.fill();
			this.ctx.beginPath();
			this.ctx.moveTo(op.x, op.y);
			if (record) {
				this.visibleOps.push(op);
			}
			break;
		case 'move':
			this.ctx.lineTo(op.x, op.y);
			this.ctx.stroke();
			if (record) {
				this.visibleOps.push(op);
			}
			break;
		case 'drawColor':
			this.drawColor = op.color;
			this.ctx.strokeStyle = op.color;
			this.ctx.fillStyle = op.color;
			if (record) {
				this.visibleOps.push(op);
			}
			break;
		case 'drawWidth':
			this.drawWidth = op.width;
			this.ctx.lineWidth = op.width;
			if (record) {
				this.visibleOps.push(op);
			}
			break;
		case 'clear':
			// clear operations are stored in ops, but never
			// appear in visibleOps since clear works by
			// nuking all steps from visibleOps
			this.ctx.clearRect(0, 0,
				this.$canvas[0].width, this.$canvas[0].height);
			this.visibleOps = [];
			// the clear operation shouldn't erase the current
			// choice of color and width, so initialize visibleOps
			// with the current choices
			this.visibleOps.push({
				what: 'drawColor',
				color: this.drawColor });
			this.visibleOps.push({
				what: 'drawWidth',
				color: this.drawWidth });
			break;
		case 'undo':
			// undo operations are stored in ops, but never
			// appear in visibleOps since undo works by removing
			// steps from visibleOps
			let saveColor = this.drawColor;
			let saveWidth = this.drawWidth;
			while (this.visibleOps.length > 0) {
				let op = this.visibleOps.pop();
				if (op.what == 'start') {
					break;	// found beginning of stroke
				}
			}
			this.redraw();
			// if color/width changes were undone, restore them
			// the undo operation shouldn't erase the current
			// choice of color and width, so add those back into
			// visibleOps as necessary
			if (saveColor != this.drawColor) {
				this.drawColor = saveColor;
				this.ctx.strokeStyle = saveColor;
				this.ctx.fillStyle = saveColor;
				this.visibleOps.push({
					what: 'drawColor',
					color: this.drawColor });
			}
			if (saveWidth != this.drawWidth) {
				this.drawWidth = saveWidth;
				this.ctx.lineWidth = saveWidth;
				this.visibleOps.push({
					what: 'drawWidth',
					color: this.drawWidth });
			}
			break;
		default:
			console.log(`draw.execute: unexpected: ${op.what}`);
		}
	}
	logAndExecute(op) {
		op.timestamp = Date.now();
		this.ops.push(op);
		this.execute(op, true);
	}

	// external API...
	reset(seconds) {
		this.canvasInit();
		this.ops = [];
		this.visibleOps = [];
		this.seconds = seconds;
		this.updateTime();
	}
	setDrawColor(color) {
		this.down = false;
		this.logAndExecute({ what: 'drawColor', color: color});
	}
	setDrawWidth(width) {
		this.down = false;
		this.logAndExecute({ what: 'drawWidth', width: width});
	}
	undo() {
		this.down = false;
		this.logAndExecute({ what: 'undo' });
	}
	clear() {
		this.down = false;
		this.logAndExecute({ what: 'clear' });
	}
	redraw() {
		this.canvasInit();

		for (const op of this.visibleOps) {
			this.execute(op, false);
		}
	}
	scale(s) {
		console.log(`scale(${s}, ${s})`);
		this.ctx.scale(s, s);
	}
	async animate() {
		this.canvasInit();
		this.visibleOps = [];

		if (this.ops.length == 0) {
			return;
		}

		let timestamp = this.ops[0].timestamp;
		for (const op of this.ops) {
			let delta = op.timestamp - timestamp;
			delta = Math.min(delta, 1500);
			if (delta) {
				await wait(delta);
			}
			this.execute(op, true);
			timestamp = op.timestamp;
		}
	}
	resize(w, h) {
		this.$canvas[0].width = w;
		this.$canvas[0].height = h;
		this.redraw();
	}
	width() {
		// XXX should we scale on resize and keep the initial width?
		return this.$canvas[0].width;
	}
	shortops() {
		let ops = [];
		for (let op of this.visibleOps) {
			delete(op.timestamp);
			ops.push(op);
		}
		return ops;
	}
	longops() {
		return this.ops;
	}
}

//
// simpleDraw -- given a selector, put the drawing tool in that element
//
function simpleDraw(selector) {
	const $content = $(selector);

	$content.html(`<div id="simple-draw">
<div id="draw-container"><canvas id="draw"></canvas></div>
<div id="controls">
	<div class="control" id="brush0"><span><img src="img/eraser.svg"></span></div>
	<div class="control" id="brush1"><span></span></div>
	<div class="control" id="brush2"><span></span></div>
	<div class="control" id="brush3"><span></span></div>
	<div class="control" id="brush4"><span></span></div>
	<div class="control" id="brush5"><span></span></div>
	<div class="control" id="undo"><span>UNDO</span></div>
	<div class="control" id="color0"><span></span></div>
	<div class="control" id="color1"><span></span></div>
	<div class="control" id="color2"><span></span></div>
	<div class="control" id="color3"><span></span></div>
	<div class="control" id="color4"><span></span></div>
	<div class="control" id="color5"><span></span></div>
	<div class="control" id="clear"><span>CLEAR</span></div>
</div>
</div>
`);

	simpleDrawState.draw = new Draw('#draw');
	colorChosen($('#color0 span').css('background-color'));
	brushChosen(3);

	$(window).resize(function() {
		resizeHandler();
	});
	resizeHandler();

	// controls for draw
	$('[id^=color]').on('click', function(e) {
		colorChosen($(this).find('span').css('background-color'));
	});
	$('[id^=brush]').on('click', function(e) {
		brushChosen($(this).index());
	});
	$('#undo').on('click', function(e) {
		simpleDrawState.draw.undo();
	});
	$('#clear').on('click', function(e) {
		simpleDrawState.draw.clear();
	});
}
