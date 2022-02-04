function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200, 300);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseX < mouseY) {
    fill(100, 0,200,500);
  }
  
  triangle(30, 89, 58, 20, 86, 75);
  rect(300, 280, 55, 55, 20, 15, 10, 5);
}