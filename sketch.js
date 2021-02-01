var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacles, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //bananaImage=loadImage(banana.png)
  
  obstacleImage=loadImage("obstacle.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  console.log(ground.x)
  

  obstaclesGroup = new Group();
  bananaGroup = new Group();
 
}


function draw() {
  background(225);
  text("score  "+score,200,10)
  if(gameState===PLAY){
    score=score+Math.round(frameCount/100)
      score=score+2
    
    
    if(keyDown("space")){
    monkey.velocityY=-12
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground)
    
    if(ground.x<0){
    ground.x=ground.width/2
    } 
    if(obstaclesGroup.isTouching(monkey)){
      gameState=END
    }
  }
  if(gameState===END){
    monkey.velocity=0
    
    bananaGroup.setVelocityXEach(0);
    obstaclesGroup.setVelocityXEach(0);
  }
  
  
  
  
  spawnObstacle();
  spawnBanana();
  drawSprites();
  
}
function spawnBanana(){
if (frameCount % 60 === 0) {
    var banana = createSprite(500,Math.round(random(20, 300)),10,10);
     banana.lifeTime=100
    
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
  monkey.depth=banana.depth
  monkey.depth+1
  bananaGroup.add(banana)
}
}
function spawnObstacle(){
  if (frameCount % 300 === 0) {
    var obstacles = createSprite(500,325,10,10);
     obstacles.lifeTime=100
    
    obstacles.addImage(obstacleImage);
   obstacles.scale = 0.1;
   obstacles.velocityX = -6;
    monkey.depth=obstacles.depth
  monkey.depth+1
    obstaclesGroup.add(obstacles)
  }
}
  




