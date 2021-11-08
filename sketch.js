var platform1,platform3,platform3Group,bestPlayer,bgSprite;
function preload(){

  bg = loadImage("images/Funny dont die lol background 2.0.png");
murderer = loadImage("images/Funny murderer lol.png");
axe = loadAnimation("images/axe1.png","images/Axe3.png","images/axe2.png");
platform = loadImage("images/Platform.png");
player =loadImage("images/player.png");
}
function setup(){
  createCanvas(1600,600);
bgSprite = createSprite(820,300,40,20);
bgSprite.addImage("bgImage",bg);
bgSprite.scale =2;
bgSprite.velocityX=-2;

            
platform1 = createSprite(250,575,600,20);
platform1.addImage("startingPlatform",platform);
platform1.scale = 15.7;
                
platform3Group = new Group();

bestPlayer = createSprite(250,525,50,50);
bestPlayer.addImage("Houdini",player)
bestPlayer.scale = 0.4

}
function draw(){
  background(0);
  platform1.visible = false;
  console.log(bgSprite.x);
   if(bgSprite.x<450){
    bgSprite.x=800;
   }
    if(keyDown("space") && bestPlayer.y >= 159) {
    bestPlayer.velocityY = -20;
      }
    
    bestPlayer.velocityY+= 0.8;
    
    
      
    bestPlayer.collide(platform1);
    spawnPlatform();
    //bestPlayer.collide(platform3)
    drawSprites();
}
function spawnPlatform(){
  if(frameCount%30===0){
  platform3 = createSprite(1000,120,10,10);
  platform3.y = Math.round(random(100,400))
  platform3.addImage("platform3",platform);
  platform3.velocityX=-8;
  platform3.scale = 2.5;
  platform3.depth = bestPlayer.depth;
bestPlayer.depth = bestPlayer.depth + 1;
  }
}