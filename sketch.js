
var sun
//var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune
//var mercury1 ,venus1,earth1,mars1,jupiter1,saturn1,uranus1,neptune1
var sun1
function preload(){
sun1=loadImage("sun_PNG13426.png")
mercury1=loadImage("merc.png")
venus1=loadImage("ven.png")
earth1=loadImage("ea.png")
mars1=loadImage("ma.png")
jupiter1=loadImage("jup.png")
saturn1=loadImage("sat.png")
uranus1=loadImage("ur.png")
neptune1=loadImage("neptune.png")

}

function setup() {
  createCanvas(800,700);
 
 // sun=createSprite(400, 460, 50, 50);
  //sun.addImage("sun",sun1);
  //sun.scale=0.10
/*
  mercury=createSprite(400,520,20,20);
  mercury.addImage("mercury",mercury1);
  mercury.scale=0.025;

  venus=createSprite(400,560,20,30)
  venus.addImage("VENUS",venus1)
  venus.scale=0.08

  earth=createSprite(400,610,30,30)
  earth.addImage("earth",earth1)
  earth.scale=0.03

  mars=createSprite(400,670,30,30);
  mars.addImage("mars",mars1)
  mars.scale=0.07
 
  jupiter=createSprite(400,740,30,30);
  jupiter.addImage("jupiter",jupiter1)
  jupiter.scale=0.2

  saturn=createSprite(400,815,30,30);
  saturn.addImage("saturn",saturn1)
  saturn.scale=0.2 

  uranus=createSprite(400,880,30,30);
  uranus.addImage("uranus",uranus1)
  uranus.scale=0.02

  neptune=createSprite(400,920,30,30);
  neptune.addImage("uranus",neptune1)
  neptune.scale=0.04*/
}

function draw() {

  background(15);
  angleMode(DEGREES);
  fill("yellow")
  ellipse(400,350,80,80)
  
  fill("grey")

  ellipseMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1,100))
 

  rotate(ellipse);
  ellipse(0, 0, 20, 20);



  //ellipseMode(CENTER);
  //translate(height/ 2, width / 2);
 // translate(p5.Vector.fromAngle(millis() / 1,10))
 // fill ("red")
 //rotate(ellipse);
  
 


drawSprites();

}


