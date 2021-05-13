var blackSquare;
var text1, text2; 
var text1Image, text2Image;
var gameState = 1; 

function preload(){
    text1Image = loadAnimation("Images/text 1.png");
    text2Image = loadAnimation("Images/text2.png"); 
}

function setup(){
    background(0,0,0);
    blackSquare = createSprite(200,200, 10, 10);
    blackSquare.shapeColor=color(0,0,0)

    text1.createSprite(200,200,10,10);
    text1.addAnimation("hi", text1Image);
}

function draw(){
    if(gameState == 0){
        background(0,0,0);
        text1.x = 200;
    }

}