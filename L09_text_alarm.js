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

// function setup() {
//     createCanvas(600,400);
// }

// function draw() {
//     background(220);
//     textAlign(CENTER,CENTER)

//     let h = hour();
//     let m = minute();
//     let s = second();

//     let timeString = nf(h,2) + ':' + nf(m,2) +':' + nf(s,2);
//     textSize(72);
//     fill('lime')
//     text(timeString, width/2, height/2)

// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let interval;
// let countdown = 5;

// function setup() {
//     createCanvas(600,400);
// }

// function draw() {
//     background(220);
//     textAlign(CENTER,CENTER)

//     textSize(24);
//     text('Click to start za timer',width/2,height-50);

//     textSize(100);
//     text(countdown,width/2,height/2);
// }

// function mousePressed() {
//     interval = setInterval(countdownUpdate, 1000)
// }

// function countdownUpdate(){
//     if(countdown>0) {
//         countdown -= 1;
//     } else {
//         clearInterval(interval)
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let interval;
let countdown = 5;
let change;
let bg = 220;
let sound;
function preload(){
    sound = loadSound("assets/bossaNova.mp3"); //sound
  }

function setup() {
    createCanvas(600,400);
}

function draw() {
    background(bg);
    textAlign(CENTER,CENTER);

    textSize(24);
    text('Click to start za timer',width/2,height-50);

    textSize(100);
    text(countdown,width/2,height/2);
}

function mousePressed() {
    interval = setInterval(countdownUpdate, 1000);
}

function countdownUpdate(){
    if(countdown>0) {
        countdown -= 1;
    } else {
        clearInterval(interval);
        change = setInterval(changeVar,500);
    }
}

function changeVar() {
    bg = color(random(255),random(255),random(255));
    sound.play();
}

function  keyPressed() {
    if(keyCode == 32) {
        clearInterval(change);
        sound,stop
    }
}