var x = 0;
var y = 200;
var speed = 3;
var speedY = 4;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, y, 200, 100, 100);
  x += speed;
	y += speed;
  
  if(x > width || x < 0) {
  speed = speed * -1;
  }
  if (y > height || y < 0) {
		speed *= -1;
  }
  x = x + speed;
}