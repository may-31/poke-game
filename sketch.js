var trainer1,trainer2,t1IMG,t2IMG;
var Poke1,Poke2,p1Img,p2Img;
var FireBlast,PyroBall,FImg,SImg,Energy,EnergyImg;
var button,A1,A2,A3,turn1,turn2,Mega1,Mega2,Mega3,Mega4
var Charizard,sceptile,MC,MS,MB,MI
var CharizardImg,sceptileImg,MCImg,MSImg,MBImg,MIImg
var Hp1,Hp2,Hp3,Hp1Img,Hp2Img,Hp3Img
var gamestate="play";


function preload() {
 t1IMG=loadImage("download.jpg");
 t2IMG=loadImage("May.png");
 p1Img=loadImage("Infernape-removebg-preview.png");
 p2Img=loadImage("Blaziken.png");
 FImg=loadImage("FireBlast2.png");
 SImg=loadImage("SunImage.png");
 CharizardImg=loadImage("Charizard.png");
 sceptileImg=loadImage("Sceptile.png");
 MCImg=loadImage("Mega Charizard.png");
 MSImg=loadImage("Sceptile Mega.png");
 MBImg=loadImage("mega Blaziken.png");
 MIImg=loadImage("Mega Inpernape.png");
 Hp1Img=loadImage("HP Bar.png")
 Hp2Img=loadImage("HP Bar 2.png")
 Hp3Img=loadImage("HP Bar 3.png")
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);

  
}

function draw() {
  background(248,248,248);  
  drawSprites();
  if(gamestate==="play"){
    button=createButton("start").position(100,100);
    button.mousePressed(Bringpoke);
    textSize(30);
    fill("black");
    text("Click here to start",100,50)
    
  }

function Bringpoke(){
   
  

  trainer1=createSprite(150,400,50,50);
  trainer1.addImage(t1IMG);
  trainer1.scale=1.5;
  trainer2=createSprite(1250,400,50,50);
  trainer2.scale=0.3;
  trainer2.addImage(t2IMG);

  Poke1=createSprite(400,500,50,50);
  Poke1.addImage(p1Img)
  Poke1.scale=0.5;
 
  Poke2=createSprite(1000,450,50,50);
  Poke2.addImage(p2Img);
  Poke2.scale=1.6;


  Hp1=createSprite(400,360,50,50);
  Hp1.addImage(Hp1Img)
  Hp1.scale=0.5;

  Hp2=createSprite(1000,250,50,50);
  Hp2.addImage(Hp1Img)
  Hp2.scale=0.5;

  A1=createButton("Attack").position(1000,630);
  A1.mousePressed(FireBlast1);

  A2=createButton("Attack").position(350,630);
  A2.mousePressed(FireBlast2);

  turn1=createButton("Switch").position(400,630);
  turn1.mousePressed(turnPoke1);

  turn2=createButton("Switch").position(1050,630);
  turn2.mousePressed(turnPoke2);

   
  
}

function FireBlast1(){

  PyroBall=createSprite(850,500,50,50);
  PyroBall.addImage(SImg)
  PyroBall.scale=0.3;
  PyroBall.velocity.x=-2;
  
}
function FireBlast2(){
  FireBlast=createSprite(550,500,50,50);
  FireBlast.addImage(FImg)
  FireBlast.scale=0.3;
  FireBlast.velocity.x=2;

}
function turnPoke1(){
  Poke1.visible=false;
 Charizard=createSprite(450,450,50,50);
 Charizard.addImage(CharizardImg)
 Charizard.scale=1;
}

function turnPoke2(){
  Poke2.visible=false;
 sceptile=createSprite(1000,450,50,50);
 sceptile.addImage(sceptileImg)
 sceptile.scale=0.8;
 
}

}
