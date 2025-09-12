// write your codes here
let Xspeed = 3;
let posx, posy;
//sound :DD
let pic;
function preload(){
    bgsound = loadSound("assets/bossaNova.mp3"); //sound
    pic = loadImage("assets/pico-a.png"); //image
}
//sound :DD

function setup() {
    createCanvas(600 , 400);
    background(220);

     posx = width/2; //starting value
    posy = height/2; //starting value
}

function draw(){
    background("lime");
    textAlign(CENTER,CENTER)
    textSize(20); //size of text
    text("HIWO X33", posx, posy);
    // image
    image(pic,50,50,110,133); //draw pico 
    // image
    // changes the value of posx
    posx = posx + Xspeed

    //go off the screen and come back the other side
    // if (posx>width){
        //posx = -50;
            // }

}

function mousePressed(){
    bgsound.play();
}

    
