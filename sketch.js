var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple=createSprite(Random(50,350),40,10,10)
apple.addImage(appleImg);
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
function createApples(){
apple=createSprite(Random(50,350),40,10,10)
apple.addImage(appleImg)
apple.velocityY=4;
apple.lifetime=60;
}
function createleaves(){
leaf=createSprite(Random(50,320),40,10,10)
leaf.addImage(leafImg)
 leaf.velocityY=4
 leaf.lifetime=60
 }