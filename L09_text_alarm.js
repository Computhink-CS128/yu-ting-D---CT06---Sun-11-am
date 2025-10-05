// // write your codes here
// let Xspeed = 3;
// let posx, posy;
// function setup() {
//     createCanvas(600 , 400);
//     background(220);

// textSize(22)

// }

// function draw(){

//     text("HIWO X33", posx, posy);
 
//     // changes the value of posx
//     posx -= Xspeed

//     if(x<=0){
//         Xspeed *=-1;
//     }

// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
    createCanvas(600,400);
}

function draw() {
    background(220);

    let h = hour();
    let m = minute();
    let s = second();

    let timeString = nf(h,2) + ':' + nf(m,2) +':' + nf(s,2);
    textSize(72);
    fill(lime)

}