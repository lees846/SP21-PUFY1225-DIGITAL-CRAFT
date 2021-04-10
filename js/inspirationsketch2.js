function setup(){
	createCanvas(600, 1600);
}
function draw(){
	background(200, 220, 230);
	// string
	strokeWeight(3);
	stroke('black');
	line(300, 0, 300, 680);

	// first bead rectangle
	fill('gray');
	stroke(100);
	strokeJoin(ROUND);
	rect(280, 225, 40, 45)

	// second bead round
	strokeJoin(SQUARE);
	fill(229);
	stroke('gray');
	ellipse(300, 298, 50, 50);

	// third bead ellipse side
	fill('gray');
	stroke(100);
	ellipse(300, 425, 60, 200)

	// fourth bead round
	strokeJoin(SQUARE);
	fill(229);
	stroke('gray');
	ellipse(300, 553, 50, 50);

	// fifth bead squarish
	fill('gray');
	stroke(100);
	strokeJoin(ROUND);
	rect(280, 581, 40, 45)

	// little circles under fifth bead
	strokeJoin(SQUARE);
	stroke(100);
	ellipse(300, 638, 20, 20); 

	// second string
	stroke('black');
	line(300, 680, 280, 730);
	line(300, 680, 320, 730);
	line(280, 730, 300, 750);
	line(320, 730, 300, 750);

	// prism circle side
	strokeWeight(3);
	fill(229);
	stroke('gray');
	quad(240, 875, 300, 725, 360, 875, 300, 1025);
	fill('229, 229, 229');
	stroke(200);
	rect(295, 725, 10, 300);

	// second string
	stroke('black');
	line(300, 1025, 300, 1100);

	// dream catcher circle
	strokeWeight(13);
	noFill();
	stroke(100);
	ellipse(300, 1200, 18, 200);
	
	// dream catcher feather right
	stroke('black');
	strokeWeight(3);
	line(306, 1300, 306, 1360);
	stroke(100);
	fill('gray');
	strokeWeight(3);
	ellipse(306, 1435, 20, 150)

	// dream catcher feather center
	stroke('black');
	strokeWeight(3);
	line(300, 1305, 300, 1375);
	stroke(100);
	fill('gray');
	strokeWeight(3);
	ellipse(300, 1450, 20, 150)

	// dream catcher feather left
	stroke('black');
	strokeWeight(3);
	line(292, 1285, 292, 1360);
	stroke(100);
	fill('gray');
	strokeWeight(3);
	ellipse(292, 1435, 20, 150)
}