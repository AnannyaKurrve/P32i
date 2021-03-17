
var monkey , monkey_running;
var banana , obstacle;
var FoodGroup, obstacleGroup;
var score;

//function preload(){
  
  
 // monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
 // bananaImage = loadImage("banana.png");
 // obstaceImage = loadImage("obstacle.png");
 
//}



function setup() {
  createCanvas(400,400);
 monkey=createSprite(80,315,20,20);
//monkey.addAnimation("running",monkey_running);
 monkey.scale=0.5;
 monkey.shapeColor="white";

 //monkey.x=mouse.x;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.shapeColor="red";
  //console.log(ground.x);
  obstacleGroup=new Group();
  obstacleGroup.shapeColor="gold";
  FoodGroup=new Group();
  FoodGroup.shapeColor="turquoise";
  var survivalTime=0;
 score=0;
}


function draw() {
background("black");
    text("score: "+ score,320,50);
  if(ground.x<0){
    ground.x=ground.width/2; 
     }
  if(keyDown("space")){
     monkey.velocityY=-12;
     }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  if(obstacleGroup.isTouching(monkey)){
     ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
     FoodGroup.setLifetimeEach(-1);
     }
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  if(FoodGroup.isTouching(monkey)){
     //text("score: "+ score, 500,50);
    score=score+2;
    if(keyDown("DOWN_ARROW")){
      monkey.velocityX=2;
    }
     }
  //console.log(ground.x);
 Spawnobstacles();
  Spawnfood();
  drawSprites();
}

function Spawnobstacles(){
 //obstacle=createSprite(800,320,10,40);
  //obstacle.velocityX=-4;
  if(frameCount%300===0){
      obstacle=createSprite(800,320,10,40);
  obstacle.velocityX=-4;
    //obstacle.addImage(obstaceImage);
    obstacle.scale=0.15;
    obstacle.lifetime=300;
    obstacleGroup.add(obstacle);
     }
}

function Spawnfood(){
  if(frameCount%80===0){
     banana=createSprite(600,250,40,10);
    banana.y=random(120,200);
    banana.velocityX=-5;
    banana.lifetime=300;
    //banana.addImage(bananaImage);
    banana.scale=0.15;
    FoodGroup.add(banana);
     }
}