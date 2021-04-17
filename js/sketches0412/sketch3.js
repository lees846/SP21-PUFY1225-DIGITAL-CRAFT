// Color Variables
	let r= 100;
	let g= 100;
	let b= 200;
	let a= 150;
	let add= 25;
// Shape Variables
	let size= 300;


function setup(){
	createCanvas(800, 900);
	noStroke();
}

function draw(){
	background(0);
	// Center 4 circles
		// left
			fill(r, g, b, a);
			circle(300, 300, size);
		// top
			fill(r + add, g, b, a);
			circle(400, 200, size);
		// right
			fill(r, g, b, a);
			circle(500, 300, size);
		// bottom
			fill(r + 3*add, g, b, a);
			circle(400, 400, size);
	// Background ellipses
		// top
			fill(r, g, b, a);
			circle(400, 595, size / 4);
		// middle
			fill(r + add, g, b, a);
			ellipse(400, 675, size, size / 4);
		// bottom
			fill(r + 2*add, g, b, a);
			ellipse(400, 745, size *2, size / 6)


}