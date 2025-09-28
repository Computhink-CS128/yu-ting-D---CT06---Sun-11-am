// write your codes here
let Xspeed = 3;
let posx, posy;
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
 
    // changes the value of posx
    posx = posx + Xspeed

    if(posx<=0 || posx>=24*4){
        speedx *=-1;
    }
}