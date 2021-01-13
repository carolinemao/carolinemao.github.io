function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	// color for 10am to 5pm
	//if (hour() > 10 && hour() < 5)
	background(76,175,217);
	textSize(32);
	noStroke();

	// buildings
	// fill(0,0,0);
	// rect(0,300,200,300);
	// fill(0,0,0);
	// rect(240,300,200,300);
	// fill(0,0,0);
	// rect(480,300,200,300);
	// fill(180);

// draws the 3 buildings
	// for (var i = 0; i < 3; i++) {
	// 	fill(0,0,0);
	// 	rect((50*(i+1))+(i*200), 300, 200, 300);
	// }

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
