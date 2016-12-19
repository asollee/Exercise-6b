// CLASS Head

function head(int xLoc, int yLoc, color horns) {
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

}