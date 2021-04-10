function setup(){
	createCanvas(600, 1600);
}
function draw(){
	background(200, 220, 230);

	// string
	strokeWeight(3);
	stroke('black');
	line(300, 0, 300, 750);

	// first bead rectangle
	fill('gray');
	stroke(100);
	strokeJoin(ROUND);
	rect(280, 180, 40, 90)

	// second bead round
	strokeJoin(SQUARE);
	fill(229);
	stroke('gray');
	ellipse(300, 298, 50, 50);

	// third bead ellipse
	fill('gray');
	stroke(100);
	ellipse(300, 425, 100, 200)

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
	ellipse(290, 638, 20, 20); 
	ellipse(310, 638, 20, 20);

	// prism circle
	fill('229, 229, 229');
	stroke('gray');
	strokeWeight(3);
	ellipse(300, 850, 300, 300);

	// second string
	stroke('black');
	line(300, 1000, 300, 1100);

	// dream catcher circle
	strokeWeight(12);
	noFill();
	ellipse(300, 1200, 200, 200);
	
	// dream catcher feather left
	stroke('black');
	strokeWeight(3);
	line(250, 1285, 250, 1360);
	stroke(100);
	fill('gray');
	strokeWeight(3);
	ellipse(250, 1435, 20, 150)

	// dream catcher feather center
	stroke('black');
	strokeWeight(3);
	line(300, 1300, 300, 1375);
	stroke(100);
	fill('gray');
	strokeWeight(3);
	ellipse(300, 1450, 20, 150)

	// dream catcher feather right
	stroke('black');
	strokeWeight(3);
	line(350, 1285, 350, 1360);
	stroke(100);
	fill('gray');
	strokeWeight(3);
	ellipse(350, 1435, 20, 150)
}