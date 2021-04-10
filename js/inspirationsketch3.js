function setup(){
	createCanvas(800, 800)
}
function draw(){
	background(200, 220, 230);
	angleMode(DEGREES);

	// string
	strokeWeight(5);
	line(400, 0, 400, 80);
	ellipse(400, 86, 20, 20);

	// Dream Catcher
	strokeWeight(13);
	noFill();
	stroke(100);
	ellipse(400, 247, 290, 290);

	// internal lines
	strokeWeight(5);
	// left and right
	arc(300, 250, 200, 200, 270, 90);
	arc(500, 250, 200, 200, 90, 270);
	// up and down
	arc(400, 350, 200, 200, 180, 0);
	arc(400, 147, 200, 200, 0, 180);
	// top to sides
	arc(330, 177, 200, 200, 310, 140);
	arc(470, 177, 200, 200, 40, 230);
	// sides to bottom
	arc(325, 318, 200, 200, 230, 50);
	arc(475, 318, 200, 200, 140, 310);

	// feather left
	strokeWeight(5);
	ellipse(288, 365, 20, 20);
	line(288, 370, 288, 400);
	ellipse(288, 405, 20, 20);
	strokeWeight(8);
	line(288, 418, 288, 445);
	ellipse(288, 547, 10, 200);

	// feather middle
	strokeWeight(5);
	ellipse(400, 408, 20, 20);
	line(400, 413, 400, 445);
	ellipse(400, 450, 20, 20);
	strokeWeight(8);
	line(400, 462, 400, 489);
	ellipse(400, 590, 10, 200);

	// feather right
	strokeWeight(5);
	ellipse(512, 365, 20, 20);
	line(512, 370, 512, 400);
	ellipse(512, 405, 20, 20);
	strokeWeight(8);
	line(512, 418, 512, 445);
	ellipse(512, 547, 10, 200);
}