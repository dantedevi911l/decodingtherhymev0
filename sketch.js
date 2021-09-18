//declaring the variables
var bg,sheep,sheepImg,wool,woolImg,bags,bagsImg,next,nextImg;
//declaring and initialising gameStates

var gameState ;


function preload(){
  //loading the images
  bg = loadImage('rhymebg.png');
  sheepImg = loadImage('blacksheep.png');
  woolImg = loadImage('wool.png');
  bagsImg = loadImage('bags.png');
  nextImg = loadImage('next.png');


}

function setup() {
  createCanvas(1800,1200);
  //createSprite and add Images
 gameState = 0;

  //next button
  next = createButton("NEXT");
  next.position(1400, 800);
  next.size(100,50)
 
  //sheep 
  sheep = createSprite(950,100,200,200)
  sheep.visible = false;
  sheep.addImage('s',sheepImg)
  sheep.scale = 0.15

  //wool
  wool = createSprite(950,300,200,200)
  wool.visible = false;
  wool.addImage('w',woolImg)
  wool.scale = 0.15
}

function draw() {
  background(bg);  
  
 
  next.mousePressed(ImageDisplay)

  

  drawSprites();

  //Prinitng The 1st line
  fill("blue");
  textStyle(BOLDITALIC)
  textSize(45);
  strokeWeight(104);
  text("Baa Baa Black  " , 500, 100);

  //Prinitng The 2nd line
  fill("blue");
  textStyle(BOLDITALIC)
  textSize(45);
  strokeWeight(104);
  text("Have you any  " , 500, 300);

  



}

function ImageDisplay(){
  sheep.visible = true;
  
}

