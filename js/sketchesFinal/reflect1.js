// I learned vector functions from p5.js references as well as various coding train videos 

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  background(0);
  stroke(255);
  
  // mirror
    strokeWeight(1);
    line(0.75 * width, 0, 0.75 * width, height);

   if(mouseX < 0.75 * width){
      strokeWeight(3);
    // mouse light
       //gives the vector something to look for
        let v0 = createVector(mouseX, mouseY); 
     
       // creates line according to the mouse's position and the point
        line(v0.x, v0.y, 0.75 * width, 1/2 * height); 
     
    // reflection
        stroke(255, 0, 0);
      // Shows where it's reflecting
       let vRef = createVector(0.75 * width, 0, 0.75 * width, height);
      // creates line according to the mouse's position and the point
       v0.reflect(vRef);
       line(0.75 * width, 1/2 * height, vRef.x, vRef.y); 
      
   }

}


/*// reflection
        stroke(255, 0, 0);
        let vRef = createVector(mouseX, height - mouseY);
      // creates line according to the mouse's position and the point
       vRef.normalize(0);
       vRef.mult(300);
       line(0.75 * width, 1/2 * height, vRef.x, vRef.y);
        */