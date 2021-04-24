/* Each version of this code has one draw line that represents the mouse as a light source as it projects to a point of refraction in the center of the canvas. The draw line is consistent across versions*/

  /* Version 1: one line is the inverse of the draw line and the other is the inverse but with the same y as the mouse. My goal is to make the reflect lines begin at the new origin and split off depending on where the mouse is in relation to the origin. */

    /*function setup() {
      createCanvas(800, 800);
    	background(0);
    	stroke(255);
    }

    function draw() {
      // reflection variable
        let reflect = width - mouseX;
        
      // draw line
        line(mouseX, mouseY, 0.5 * width, 0.5 * height);

     // reflect lines
        line(reflect, mouseY, 0.5 * width, 0.5 * height);
        line(reflect, height - mouseY, 0.5 * width, 0.5 * height)

     // Keeps lines from staying on the canvas once they'be been drawn.
      	background(0, 0, 0, 100);
    	
      // These are the two "axis" lines
        line(0.5 * width, 0, 0.5 * width, height);
        line(0, 0.5 * width, height, 0.5 * width);
    }
  */


  /* Version 2: Same goal, different trials with variables etc. trying to work from each edge as the base for the coordinates of the reflected lines. */ 
    
    function setup() {
      createCanvas(800, 800);
    	background(0);
    	stroke(255);
    }

    function draw() {
      // reflection variable
        let reflectX = width - mouseX;
        let reflectY = height - mouseY;
        
      // draw line
        line(mouseX, mouseY, 0.5 * width, 0.5 * height);
      
      // Reflect lines
         // These lines do exactly what I want when following the x axis, but they are not long enough to reach the edges of the canvas regardless of the angle they're shot at. And I forced this to work with math that I'm not sure I understand, but this is kinda what I'm going for.
          line(reflectX, reflectY + height / 10, 0.5 * width, 0.5 * height);
          line(reflectX, reflectY - height / 10, 0.5 * width, 0.5 * height)  
      
        // This line works when I "draw" on the right side of the x axis, but not from the left side.
          // line(reflectX, reflectY - reflectX, 0.5 * width, 0.5 * height);
        
      // Keeps lines from staying on the canvas once they'be been drawn.
      	background(0, 0, 0, 100);

    	// These are the two "axis" lines
        line(0.5 * width, 0, 0.5 * width, height);
        line(0, 0.5 * width, height, 0.5 * width);
    } 



  /* Version 3: trying to use the length of the draw line to inform the distance between the endpoints of the two reflection lines. I also tried to use a function, see if that would clean it up and make it easier to mess with. The idea was to have the second half of the draw line (across the origin) as the center point for the two lines that reflect from the middle. */
 
 /*   function setup() {
      createCanvas(800, 800);
    	background(0);
    	stroke(255);
    }

    function draw() {

      //let reflect=  width - mouseY;
        
      // draw line
        line(mouseX, mouseY, 0.5 * width, 0.5 * height);
      
      drawReflection(mouseX, mouseY);
    	
      // Keeps lines from staying on the canvas once they'be been drawn.
        background(0, 0, 0, 100);
          
      // These are the two "axis" lines
        line(0.5 * width, 0, 0.5 * width, height);
        line(0, 0.5 * width, height, 0.5 * width);
        // console.log(getDistance(400, 400, 100, 700));
    }

    function drawReflection(xPos, yPos) {
        // reflection variable
        let reflectX = width - mouseX;
        let reflectY = height - mouseY;
        const center = 0.5 * width;
      
    // continuation of draw line
        line(mouseX, mouseY, reflectX, reflectY);
      
        //line above (doesn't work)
          // line(reflectX, reflectY + getDistance(mouseX, mouseY, center, center), center, center);
        //line below
          line(reflectX, reflectX + mouseX, center, center);
    }


    // Using code from https://www.kirupa.com/html5/using_the_pythagorean_theorem_to_measure_distance.htm to have a function that gets the length of the draw line (from the origin/"center") to be able to change things relative to that number.
    function getDistance(xA, yA, xB, yB) { 
    	let xDiff = xA - xB; 
    	let yDiff = yA - yB;
          xA, yA = 0.5 * width;
    	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }
*/