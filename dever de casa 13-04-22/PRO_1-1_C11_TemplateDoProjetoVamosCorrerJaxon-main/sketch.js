var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
    createCanvas(600,600);
 
    
    boy=createSprite(300,300);
    boy.addAnimation(boyImg);
    boy.velocityY = 4;
    boy.scale=0.2;
    
    path=createSprite(300,300);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale=1.2;

    leftBoundary=createSprite(0,0,100,800);
    leftBoundary.visible = false;

    rightBoundary=createSprite(0,0,100,800);
    rightBoundary.visible = false;
}


function draw() {
    background(0);
    path.velocityY = 4;

    boy.X = World.mouseX;
    edges= createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(leftBoundary);
    boy.collide(rightBoundary);

     
    if(path.Y < 0 ){
    path.Y = path.width/2
    };



 drawSprites();

 }




