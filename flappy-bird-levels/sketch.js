var obstacles, spaceShip, back, over;
var PLAY = 1
var END = 0
var gameState = PLAY
var lives = 1

//preload
function preload() {
background1 = loadImage("background3.png");
spaceShipImg = loadImage("pngfind.com-spaceship-png-transparent-3878988.png");
obImg = loadImage("pngfind.com-meteor-png-447721.png")
blastImg = loadAnimation("pngfind.com-energy-blast-png-1637037.png")
gameoImg = loadImage("game-over.png")
}

//setup
function setup() {
createCanvas(600,300) 

spaceShip = createSprite(50,150,50,50);
spaceShip.addImage(spaceShipImg)
spaceShip.scale = 0.04;

obstaclesGroup = new Group()

over = createSprite(300,150,50,50)
over.addImage(gameoImg)
over.scale = 0.3
over.visible = false;
}

//draw
function draw() {
background(182);
background(background1);

if(gameState===PLAY){

if(keyDown("space") && spaceShip.y >= 80){
    spaceShip.velocityY = -10;
}

spaceShip.velocityY = spaceShip.velocityY + 0.8

if(obstaclesGroup.isTouching(spaceShip) || spaceShip.y >= 300){
    
      gameState = END;
}
spawnobstacles();
}

if(gameState===END){
    console.log("stop");
    spaceShip.changeAnimation(blastImg);
    spaceShip.velocityY = 0;
    over.visible = true;
   //swal for game end 
   //change animation of spaecship to blastImg
}


drawSprites();
}

function spawnobstacles() {
    //write code here to spawn the clouds
    if (frameCount % 100 === 0) {
      var obstacle = createSprite(600,120,40,10);
      obstacle.y = Math.round(random(30,210));
      obstacle.addImage(obImg);
      obstacle.scale = 0.08;
      obstacle.velocityX = -3;
      
       //assign lifetime to the variable
       obstacle.lifetime = 200;
      
      //adjust the depth
      
      
      //add each cloud to the group
      obstaclesGroup.add(obstacle);
    }
    
  }