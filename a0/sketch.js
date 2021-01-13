function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// TODO: PRINT OUT MINUTE; WRITTEN PORTION

function draw() {
	// time of day settings
	if (hour() > 5 && hour() <= 10) {
		background(189,236,239);
		fill(246,226,189);
		circle(130,130,120);
	} else if (hour() > 10 && hour() <= 17) {
		background(76,175,217); // afternoon
		fill(252,239,207);
		circle(300,90,120);
	} else if (hour() > 17 && hour() <= 22) {
		background(118,76,161); // evening
		fill(243,185,95);
		circle(550,150,120);
	} else if (hour() > 22 || hour() <= 5) {
		background(16,8,34); // night
		fill(246,240,189);
		circle(130,130,120);
	}

	noStroke();

	// building 1
	fill(3,4,94);
	rect(30, 300, 200, 300);

	// building 1 windows
	var c = 0; // tracks window number

	for (var j = 0; j < 6; j++) {
		for (var i = 0; i < 4; i++) {
			c++; // lol
			if (c <= hour()) {
				fill(144,224,239);
			} else {
				fill(3,62,138);
			}
			rect(30+(16*(i+1)+(i*30)), 320+(j*45), 30, 30);
		}
	}

	// building 2
	fill(254,70,126);
	rect(260, 220, 240, 380);

	// building 2 windows
	var d = 0; // tracks window number

	for (var j = 0; j < 10; j++) {
		for (var i = 0; i < 6; i++) {
			d++; // lol
			if (d <= minute()) {
				fill(249,189,198);
			} else {
				fill(255,132,160);
			}
			rect(280+(8*(i+1)+(i*24)), 240+(j*35), 24, 24);
		}
	}

	// building 3
	fill(34,25,66);
	rect(530, 160, 240, 440);

	// building 3 windows
	var e = 0; // tracks window number

	for (var j = 0; j < 10; j++) {
		for (var i = 0; i < 6; i++) {
			e++;
			if (e <= second()) {
				fill(190,149,196);
			} else {
				fill(93,83,142);
			}
			rect(545+(12*(i+1)+(i*20)), 190+(j*40), 24, 24);
		}
	}
	
}
