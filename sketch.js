var box;

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 80, 80);
  box.shapeColor = color(255, 0, 0); // Default color
}

function draw() {
  background(30);

  // Movement and size logic
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
    box.shapeColor = color(0, 0, 255); // Blue
    box.width = 50;
    box.height = 50;
  }
  else if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
    box.shapeColor = color(255, 0, 0); // Red
    box.width = 50;
    box.height = 50;
  }
  else if (keyIsDown(UP_ARROW)) {
    box.position.y -= 5;
    box.shapeColor = color(0, 255, 0); // Green
    box.width = 100;
    box.height = 100;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    box.position.y += 5;
    box.shapeColor = color(255, 255, 0); // Yellow
    box.width = 100;
    box.height = 100;
  }
  else {
    box.shapeColor = color(255); // White
    box.width = 30;
    box.height = 30;
  }

  drawSprites();
}
