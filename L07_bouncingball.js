// write your codes here
// let x = 200;
// let y = 200;
// let speed = 2;


// function setup() {
//     createCanvas(600,600);
//     background(220);
    
// }

// function draw(){
//     background(220);
//     x = constrain (x,25,width-25)
//     y = constrain (y,25,height-25)


//     if (keyIsDown(RIGHT_ARROW)){
//         x += 2;
//     }

//     if (keyIsDown(LEFT_ARROW)){
//         x -= 2;
//     }
//         if (keyIsDown(UP_ARROW)){
//         y -= 2;
//     }

//     if (keyIsDown(DOWN_ARROW)){
//         y += 2;
//     }

//     circle(x,y,50);
// }
let pic;
let sound;
let x = 200;
let y = 200;

function preload(){
    staticImg = LoadImage("assets/pico-a.png");
    sound= LoadSound("assets/pop.mp3");
}
function setup(){
    createCanvas(400,400)
}

function draw(){
    background("lightBlue");
    image(staticImg,x ,y ,80 ,80 );
}

 function mousePressed(){
    bgsound.play();
}