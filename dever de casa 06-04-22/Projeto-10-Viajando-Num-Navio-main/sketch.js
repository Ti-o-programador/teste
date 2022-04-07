var barco,mar
var barcoImg,marImg
function preload(){
  marImg = loadImage("sea.png")
  barcoImg = loadAnimation("ship-1.png", "ship-2.png",
 "ship-2.png", "ship-1.png")
}
function setup(){
  createCanvas(400,400)
  background("blue")
  mar = createSprite(400, 200)
  mar.addImage(marImg)
  mar.velocityX = -5
  mar.scale = 0.4
  barco = createSprite(200, 200, 30, 30)
  barco.addAnimation("movingBarco", barcoImg)
  barco.scale = 0.28
}
function draw() {
  background(0)
  mar.velocityX = -3
if(mar.x < 0){
mar.x = MAR.width/2}
drawSprites();}


