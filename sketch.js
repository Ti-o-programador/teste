var cubo 
var edges

function setup() {
  createCanvas(400,400);
cubo = createSprite(200, 200, 40, 40)
edges = createEdgeSprites()
}



function draw() 
{
  background(30);
  drawSprites();
if (keyDown(RIGHT_ARROW)) {
 cubo.x += 20 
}
if (keyDown(LEFT_ARROW)) {
 cubo.x -= 20 
}
if (keyDown(UP_ARROW)) {
 cubo.y -= 20 
}
if (keyDown(DOWN_ARROW)) {
 cubo.y += 20 
}
cubo.bounceOff(edges)

}




