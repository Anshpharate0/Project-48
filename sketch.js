var gamestate = "PLAY";
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13;
var bucketImg,enemyImg,diamondImg;
var bucket,knife,d1,d2,d3,b1,b2,b3,b4,b5,b6,b7;

function preload(){
bucketImg = loadImage("bucket.png");
enemyImg = loadImage("knife.jpg");
diamondImg = loadImage("diamond.png");
}


function setup() {
createCanvas(800,500)

bucket = createSprite(40,40,50,20);
bucket.addImage(bucketImg);
bucket.scale = 0.05;

knife = createSprite(45,450,40,20);
knife.addImage(enemyImg);
knife.scale = 0.03;
knife.debug = true;

knife2 = createSprite(350,450,40,20);
knife2.addImage(enemyImg);
knife2.scale = 0.03;
knife2.debug = true;

knife3 = createSprite(450,450,40,20);
knife3.addImage(enemyImg);
knife3.scale = 0.03;
knife3.debug = true;

knife4 = createSprite(730,450,40,20);
knife4.addImage(enemyImg);
knife4.scale = 0.03;
knife4.debug = true;

b1 = createSprite(50,250,20,20);
  b1.shapeColor = "blue";
  b1.visible = true;
}

function draw() {
  background(0);
  if(gamestate === "PLAY"){
  knife.velocityY = -8;
  knife2.velocityY = -8;
  knife3.velocityY = -12;
  knife4.velocityY = -25;

  

  b2 = createSprite(450,250,20,20);
  b2.shapeColor = "blue";
  b2.visisble = true;

  b3 = createSprite(350,350,20,20);
  b3.shapeColor = "blue";
  b3.visisble = true;

  b4 = createSprite(720,90,20,20);
  b4.shapeColor = "blue";
  b4.visisble = true;

  b5 = createSprite(650,110,20,20)
  b5.shapeColor = "blue";
  b5.visisble = true;

wall1 = createSprite(400,10,800,20);
wall1.shapeColor="green";

wall2 = createSprite(10,250,20,500);
wall2.shapeColor="green";

wall3 = createSprite(400,490,800,20);
wall3.shapeColor="green";

wall4 = createSprite(790,250,20,500);
wall4.shapeColor="green";

wall5 = createSprite(70,90,100,20);
wall5.shapeColor="green";
wall5.debug = true

wall6 = createSprite(230,70,20,100);
wall6.shapeColor="green";

wall7 = createSprite(120,400,20,220);
wall7.shapeColor="green";

wall8 = createSprite(370,70,20,100);
wall8.shapeColor="green";

wall9 = createSprite(280,390,20,200);
wall9.shapeColor="green";

wall10 = createSprite(290,250,200,20);
wall10.shapeColor="green";

wall11 = createSprite(500,250,20,200);
wall11.shapeColor="green";

wall12 = createSprite(600,250,200,20);
wall12.shapeColor="green";

wall13 = createSprite(640,370,20,230);
wall13.shapeColor="green";

wall14 = createSprite(650,70,20,100);
wall14.shapeColor="green";


if(keyDown(UP_ARROW)){
  bucket.y = bucket.y -12; 
}

if(keyDown(DOWN_ARROW)){
  bucket.y = bucket.y +12; 
}

if(keyDown(RIGHT_ARROW)){
  bucket.x = bucket.x +12; 
}

if(keyDown(LEFT_ARROW)){
  bucket.x = bucket.x -12; 
}

if(bucket.isTouching(b1)){
  b1.visible = false;
}



if(knife.collide(wall5)){
  knife.y = 460;
}

if(knife2.collide(wall10)){
  knife2.y = 460;
}

if(knife3.collide(wall1)){
  knife3.y = 460;
}

if(knife4.collide(wall1)){
  knife4.y = 460;
}

if(bucket.isTouching(knife)|| bucket.isTouching(knife2)||bucket.isTouching(knife3)||bucket.isTouching(knife4)){
  gamestate = "END";
}
  
drawSprites()
}
if(gamestate === "END"){
  bucket.destroy();
  fill("yellow");
  textSize(20);
  text("GAME OVER",350,250);
  knife.velocityY = 0;
  knife2.velocityY = 0;
  knife3.velocityY = 0;
  knife4.velocityY = 0; 
}
}