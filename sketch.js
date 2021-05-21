var cat;
var cat1Image,cat2Image;
var mouse;
var mouse1Image,mouse2Image
var background1
var backgroundImagr

function preload() {
   catimage1=loadAnimaction("cat1.png");
   catimage2=loadanimaction("cat2.png");
   mouseimage1=loadAnimaction("mouse1.png");
   mouseimage2=loadAnimaction("mouse2.png");
   backgroundImagr=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
 cat=createSprite(800,400);
 cat.addImage("catImage1");

 mouse=createSprite(800,400);
 


}

function draw() {

    background(255);
    background1=createSprite(500,400,1000,800);
    background1=addImage(backgroundimage);

    drawSprites();
}


function keyPressed(){

    if(keyCode===RIGHT_ARROW){

    mouse.addAnimaction("mouseImage1,mouseImage2");
    mouse.changeAnimaction("mouseImage2");
    }

    


}
