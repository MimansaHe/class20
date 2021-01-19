var fixed;
var move;

function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 100);
  move.shapeColor="blue";
  fixed = createSprite(200,200,100,50);
  fixed.shapeColor="blue";


  
}

function draw() {
  background(255,255,255);  
   move.x=World.mouseX;
  move.y=World.mouseY;
  if(move.x-fixed.x<move.width/2+fixed.width/2 && fixed.x-move.x<move.width/2+fixed.width/2 && move.y-fixed.y<move.height/2+fixed.height/2 && fixed.y-move.y<move.height/2+fixed.height/2){
    fixed.shapeColor="pink";
    move.shapeColor="pink";
  }
  else{
    move.shapeColor="blue";
   fixed.shapeColor="blue";
 }
  console.log(move.width/2+fixed.width/2,move.x-fixed.x);

  drawSprites();
}