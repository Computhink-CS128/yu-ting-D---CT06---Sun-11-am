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

    text("HIWO X33", posx, posy);
 
    // changes the value of posx
    posx -= Xspeed

    if(x<=0){
        Xspeed *=-1;
    }

}