var bg,bgImg1,bgImg2
var monster,monsterImg
var gun,gunImg 
var ammo,ammoImg

function preload(){
   bgImg1 = loadImage("bg-1.jpeg")
   bgImg2 = loadImage("bg-2.jpeg")
   monsterImg = loadImage("monsters.png")
   gunImg = loadImage('gun_1.png')
   bulletImg = loadImage("bullet1.png")


}

function setup(){
   createCanvas(displayWidth-100,displayHeight-100);
   bg = createSprite(width/2,height/2);
   bg.addImage(bgImg1);
   bg.scale=0.7;

   gun=createSprite(width/2,height-200);
   gun.addImage(gunImg);
   monsterGroup = new Group()
   bulletGroup = new Group()
  // gun.rotation = 90;
//gun.rotateToDirection=true;
//gun.velocityX = 5;
   
}
function draw() {
   background("black")
   

  if (keyDown(LEFT_ARROW)&&gun.x>width/2-100) {
    gun.x-=5
  }
  if (keyDown(RIGHT_ARROW)&&gun.x<width/2+400) {
    gun.x+=5
  } 
  gun.x = mouseX;
  gun.y = mouseY; 
  monsters();
  if(keyDown("space")) {
    shoot();
  }
  drawSprites();
    
}
function monsters() {
    if(frameCount%80===0) {
      monster = createSprite(200,200)
      monster.x = Math.round(random(250,width-250))
      monster.y = Math.round(random(100,height-300))
      monster.addImage(monsterImg)
      monster.velocityY = 0.5;
      monster.lifetime = 300;
      monsterGroup.add(monster)
    }

}

function shoot() {
  bullet =createSprite(gun.x+20,gun.y+40) 
  bullet.addImage(bulletImg)
  bulletGroup.add(bullet)
  bullet.lifetime = 400;

}