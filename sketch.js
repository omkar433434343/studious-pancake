var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15;
var player;
var bg;
var wall;
var wallImg;
var playerImg;
var lock;
var keyImg;
var NPC;
var zombie;
var NPCImg;


function preload(){
    bg = loadImage("images/bg.png");
    wall = loadImage("images/wall1.png");
    wallImg = loadImage("images/wall.png");
   playerImg = loadImage("images/gb.png")
    keyImg = loadImage("images/key.png");
    NPCImg = loadImage("images/NPC1.gif");
}





function setup(){
            createCanvas(displayWidth, displayHeight)   
            
            wall1=createSprite(120,150,100,10);
        
            wall2=createSprite(40,100,10,100);

            wall3=createSprite(250,50,500,10);

            wall4=createSprite(135,245,10,200);

            wall5=createSprite(160,350,100,10);

            wall6=createSprite(300,200,10,300);

            wall7=createSprite(500,450,900,10);

            wall8=createSprite(500,195,10,300);

            wall9=createSprite(430,350,150,10);

            wall10=createSprite(700,50,250,10);
            
            wall11 = createSprite(870,100,50,250);

            wall12 = createSprite(715,530,50,50)

            wall13 = createSprite(450,530,50,50)

            wall14 = createSprite(660,630,50,50);

            wall15 = createSprite(870,300,50,50)

            player = createSprite(10,90,10,10);

            lock = createSprite(620,550,50,50)

            NPC = createSprite(200,600,50,50);

            zombie = createSprite(1000,500,50,50)
          

            wall2.addImage(wallImg)
            wall2.scale = 0.4

            wall1.addImage(wall)
            wall1.scale=0.4

            wall3.addImage(wall)
            wall3.scale = 2

            
            wall4.addImage(wallImg)
            wall4.scale = 1

            
            wall5.addImage(wall)
            wall5.scale = 0.6
            
            wall6.addImage(wallImg)
            wall6.scale = 1.5   

            
            wall7.addImage(wall)
            wall7.scale = 4

            
            wall8.addImage(wallImg)
            wall8.scale = 1.5

            
            wall9.addImage(wall)
            wall9.scale = 0.8

            
            wall10.addImage(wall)
            wall10.scale = 1.5

            wall11.addImage(wallImg)
            wall11.scale =1.7

            wall12.addImage(wallImg)

            wall13.addImage(wallImg)

            wall14.addImage(wall)

            wall15.addImage(wallImg)

            lock.addImage(keyImg);
            lock.scale = 0.06    
            
        player.addImage(playerImg)
        player.scale = 0.4

        NPC.addImage(NPCImg)
        NPC.scale = 0.5

        zombie.addImage(NPCImg)
        zombie.scale = 0.5
        
        NPC.velocityX=2
        NPC.velocityY=2

        zombie.velocityX=4
        zombie.velocityY=5

 }


function draw(){
    background(bg);

   

if(keyDown("RIGHT_ARROW")){
        player.x=player.x+2



}
if(keyDown("LEFT_ARROW")){
    player.x=player.x-2



}
if(keyDown("UP_ARROW")){
    player.y=player.y-  2



}
if(keyDown("DOWN_ARROW")){
    player.y=player.y+2

    



}
if(player.isTouching(lock)){
    lock.x = player.x
    lock.y = player.y
    
    

    wall15.x = 1000
   wall15.y = 900
  
  

}

if(player.isTouching(wall10)){
   
   wall10.x = 1000
   wall10.y = 900
}

    if(player. isTouching(NPC)){

        alert("you lost ", 500,500)


    }

    if(player. isTouching(zombie)){

        alert("you lost ", 500,500)


    }

       edges = createEdgeSprites();


        NPC.bounceOff(edges);
        NPC.bounceOff(wall1);
        NPC.bounceOff(wall2);
        NPC.bounceOff(wall3);
        NPC.bounceOff(wall4);
        NPC.bounceOff(wall5);
        NPC.bounceOff(wall6);
        NPC.bounceOff(wall7);
        NPC.bounceOff(wall8);
        NPC.bounceOff(wall9);
        NPC.bounceOff(wall10);
        NPC.bounceOff(wall11);
        NPC.bounceOff(wall12);
        NPC.bounceOff(wall13);
        NPC.bounceOff(wall14);
        NPC.bounceOff(wall15);

        zombie.bounceOff(edges);
        zombie.bounceOff(wall1);
        zombie.bounceOff(wall2);
        zombie.bounceOff(wall3);
        zombie.bounceOff(wall4);
        zombie.bounceOff(wall5);
        zombie.bounceOff(wall6);
        zombie.bounceOff(wall7);
        zombie.bounceOff(wall8);
        zombie.bounceOff(wall9);
        zombie.bounceOff(wall10);
        zombie.bounceOff(wall11);
        zombie.bounceOff(wall12);
        zombie.bounceOff(wall13);
        zombie.bounceOff(wall14);
        zombie.bounceOff(wall15);

        player.collide(edges);
        
        player.collide(wall1)
        player.collide(wall2)
        player.collide(wall3)
        player.collide(wall4)
        player.collide(wall5)
        player.collide(wall6)
        player.collide(wall7)
        player.collide(wall8)
        player.collide(wall9)
        player.collide(wall10)
        player.collide(wall11)
        player.collide(wall12)
        player.collide(wall13)
        player.collide(wall14)
        player.collide(wall15)
            drawSprites();
}
