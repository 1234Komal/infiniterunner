var path,boy,cash,diamonds,jewelry,sword;
var pathImg,boyImg,cashImg,diamondsImg,jewelryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jewelryG,swordGroup;
var end,endImg;

//Game States
var PLAY=1;
var END=0;
var gameState=1;


function preload(){
boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
pathImg = loadImage("path.png");
diamondsImg = loadImage("stack-of-gold-coins-3.png");
cashImg = loadImage("26141-8-money-bag-file.png");
jewelryImg = loadImage("diamond-clipart-yellow-diamond-16.png");
swordImg = loadImage("sword.png");
endImg = loadImage("gameOver.png");
}

function setup() {
createCanvas(400,600);
 


path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;

boy = createSprite(200,550,20,20);
boy.addAnimation("JakeRunning", boyImg);
boy.scale=0.8;

cashG=new Group();
diamondsG=new Group();
jewelryG=new Group();
swordGroup=new Group();



}

function draw() {
background(0);

if(gameState===PLAY){
    background(0);
    boy.x = World.mouseX;
    
    edges= createEdgeSprites();
    boy.collide(edges);
 
    //code to reset the background
    if(path.y > 400 ){
      path.y = height/2;
    }
    
      createCash();
      createDiamonds();
      createjewelry();
      createSword();
  
      if (cashG.isTouching(boy)) {
        cashG.destroyEach();
        treasureCollection=treasureCollection+50;
      }
      else if (diamondsG.isTouching(boy)) {
        diamondsG.destroyEach();
        treasureCollection=treasureCollection+100;
        
      }else if(jewelryG.isTouching(boy)) {
        jewelryG.destroyEach();
         treasureCollection= treasureCollection + 150;
        
      }else{
        if(swordGroup.isTouching(boy)) {
          gameState=END;
         
           
          cashG.destroyEach();
          diamondsG.destroyEach();
          jwelleryG.destroyEach();
          swordGroup.destroyEach();
          
          cashG.setVelocityYEach(0);
          diamondsG.setVelocityYEach(0);
          jwelleryG.setVelocityYEach(0);
          swordGroup.setVelocityYEach(0);


       
      }
    }
    
    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: "+ treasureCollection,10,30);
   }
  
}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.03;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.04;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryG.add(jewelry);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}




