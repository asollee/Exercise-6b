// Exercise 6b - Amy Lee

//var mouse = createVector(mouseX, mouseY);
//var head;
var tailVector;
var tailLoc;

function setup() {
  createCanvas(600, 600);
  background(20, 10, 50);
  head = new Head();
  body = new Body();
  tail = new Tail();
}

function draw() {
  background(20, 10, 50);
  head.display(mouseX, mouseY, 255);

  body.display(mouseX);

  tail.display(mouseX);
  tailLoc = createVector(0, 0);
  tailVector = createVector(-10, 100);
  /*
  head(100, 0, color(255, 0, 0));
  RoboCat(-200);
  head(200, 0, 255);
  */
} // draw function BB


function Head() {
  this.display = function(xLoc, yLoc, horns) {
      // HORNS
      noStroke();
      fill(horns);
      triangle(200 + xLoc, 150 + yLoc, 200 + xLoc, 50 + yLoc, 275 + xLoc, 100 + yLoc);
      triangle(325 + xLoc, 100 + yLoc, 400 + xLoc, 50 + yLoc, 400 + xLoc, 150 + yLoc);

      // HEAD LIGHTNING DESIGN
      stroke(225, 225, 0);
      strokeWeight(1);
      line(290 + xLoc, 200 + yLoc, 290 + xLoc, 175 + yLoc);
      line(290 + xLoc, 175 + yLoc, 270 + xLoc, 155 + yLoc);
      line(270 + xLoc, 155 + yLoc, 290 + xLoc, 135 + yLoc);
      line(290 + xLoc, 135 + yLoc, 270 + xLoc, 115 + yLoc);
      line(310 + xLoc, 200 + yLoc, 310 + xLoc, 175 + yLoc);
      line(310 + xLoc, 175 + yLoc, 330 + xLoc, 155 + yLoc);
      line(330 + xLoc, 155 + yLoc, 310 + xLoc, 135 + yLoc);
      line(310 + xLoc, 135 + yLoc, 330 + xLoc, 115 + yLoc);

      // HEAD
      stroke(0);
      fill(0, 100);
      ellipse(300 + xLoc, 200 + yLoc, 250, 225);

      // EYES
      stroke(225, 225, 0);
      strokeWeight(5);
      fill(225, 0, 0);
      ellipse(250 + xLoc, 200 + yLoc, 50, 50);
      ellipse(350 + xLoc, 200 + yLoc, 50, 50);

      // MOUTH
      noStroke();
      fill(220);
      ellipse(300 + xLoc, 250 + yLoc, 80, 80);

      fill(200, 0, 0, 50);
      rect(280 + xLoc, 230 + yLoc, 40, 20, 7);
    } // this.display method BB
} // Head class BB


// CLASS Body
function Body() {
  this.display = function(xLoc) {
      // BODY
      stroke(0);
      strokeWeight(5);
      fill(10);
      ellipse(300 + xLoc, 400, 225, 275);

      fill(100, 50);
      ellipse(300 + xLoc, 425, 180, 200);

      fill(255);
      ellipse(250 + xLoc, 400, 40, 40);
      ellipse(350 + xLoc, 400, 40, 40);


      // FEET
      fill(240);
      ellipse(250 + xLoc, 520, 60, 45);
      ellipse(350 + xLoc, 520, 60, 45);
    } // display method BB
} // class Body BB


// CLASS Tail
function Tail() {
  this.display = function(xLoc) {
      // TAIL
      noFill();
      stroke(175);
      strokeWeight(4);
      bezier(50 + xLoc, 325 + tailLoc.y, 150 + xLoc, 325 + tailLoc.y, 75 + xLoc, 510 + tailLoc.y, 220 + xLoc, 500 + tailLoc.y);
      tailLoc.add(tailVector);
      bezier(50 + xLoc, 325 + tailLoc.y, 150 + xLoc, 325+ tailLoc.y, 75 + xLoc, 510+ tailLoc.y, 220 + xLoc, 500 + tailLoc.y);
// ^^??????????????????????????????????????????????????????????


      noStroke();
      fill(225, 225, 10);
      quad(20 + xLoc, 325, 40 + xLoc, 315, 50 + xLoc, 325, 40 + xLoc, 335);
    } // display method BB
} // class tail BB