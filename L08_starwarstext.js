// write your codes here
let storyText = [
    "A long time ago in a galaxy far,",
    "far away...",
    "",
    "EPISODE I",
    "THE BEGINNING",
    "",
    "It is a period of learning...",
    "Students have begun their journey",
    "into the world of p5.js.",
    "With newfound powers, they",
    "create amazing visuals and",
    "animations...",
    "",
    "May the Code be with you!"
];

let 
function setup() {
    createCanvas(600,600);

    fill(255,255,0);
    textSize(24);
    textAlign(CENTER);
    ypos = height;

    function preload(){
    bgsound = loadSound("assets/bossaNova.mp3"); //sound
  }
}

function draw(){
    bgsound.play();
    background(0);

    for (let i=0; i<storyText.length; i++) {
        text(storyText[i], width/2,ypos + i*50);
    }

    // if(ypos < -(storyText.length *24 + (storyText.length-1)*24)){
    //     ypos = height
    // }

    console.log(ypos)

    ypos -= 4;
}