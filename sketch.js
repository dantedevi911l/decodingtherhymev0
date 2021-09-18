//declaring the variables
var bg,sheep,sheepImg,wool,woolImg,bags,bagsImg,next,nextImg;
//declaring and initialising gameStates

var gameState = 0; ;
var preAndPostStrings = {"sheep": [["Baa Baa "], ["Baa Baa Black Sheep "]],
                         "wool": [["Have you any "], ["Have you any wool"]]
                      };

var states = { "sheep": 0 ,
                "wool": 0};

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
  next.size(100,50);
 
  //sheep 
  sheep = createSprite(950,100,200,200)
  sheep.visible = true;
  sheep.addImage('s',sheepImg);
  sheep.scale = 0.15;

  //wool
  wool = createSprite(950,300,200,200)
  wool.visible = true;
  wool.addImage('w',woolImg);
  wool.scale = 0.15;


  background(bg); 

  

  drawSprites();

  //Prinitng The 1st line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(45);
  strokeWeight(104);
  text("Baa Baa  " , 500, 100);
  

  //Prinitng The 2nd line
  fill("blue");
  textStyle(BOLDITALIC);
  textSize(45);
  strokeWeight(104);
  text("Have you any  " , 500, 300);
  

  

}

function draw() {
  
  //background(bg);
  //drawSprites();
  //next.mousePressed(textDisplay);
  
  background(bg);  
  
 
  next.mousePressed(textDisplay);

  

  drawSprites();

  //Prinitng The 1st line
  fill("blue");
  textStyle(BOLDITALIC)
  textSize(45);
  strokeWeight(104);
  text(preAndPostStrings["sheep"][ states["sheep"] ] , 500, 100);
  

  //Prinitng The 2nd line
  fill("blue");
  textStyle(BOLDITALIC)
  textSize(45);
  strokeWeight(104);
  text(preAndPostStrings["wool"][ states["wool"] ] , 500, 300);



}

function textDisplay(){
  if( gameState == 0 ){

    gameState += 1;
    removeSprite(sheep);
    states["sheep"]+= 1;

  }else if(gameState == 1){
    
    removeSprite(wool);
    states["wool"]+= 1;
    gameState+= 1;
  }
  
}

