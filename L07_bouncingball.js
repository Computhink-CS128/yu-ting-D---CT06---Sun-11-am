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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let pic;
// let sound;
// let x = 200;
// let y = 200;
// let speed = 5;
// let imgwidth = 80;
// let imgheight = 80;

// function preload(){
//     staticImg = loadImage("assets/pico-a.png");
//     sound = loadSound("assets/pop.mp3");
// }
// function setup(){
//     createCanvas(600,400)
// }

// function draw(){
//     background("lightBlue");
//     image(staticImg, x, y, 80, 80);

//     x = constrain(x,25,width-25);
//     y = constrain(y,25,height-25);


//     if (keyIsDown(RIGHT_ARROW)){
//         x += speed;
//     }

//     if (keyIsDown(LEFT_ARROW)){
//         x -= speed;
//     }
//         if (keyIsDown(UP_ARROW)){
//         y -= speed;
//     }

//     if (keyIsDown(DOWN_ARROW)){
//         y += speed;
//     }

//     image(staticImg,x ,y ,imgwidth ,imgheight );
// }

// function keyReleased(){
//     imgwidth = 80;
//     sound.play();
// }  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let x = 300;
let y = 200;
let size = 30;
let speedx = 2;
let speedy = 2;

function setup(){
    createCanvas(600,400);
    background(220)
}

function draw() {
    background(220);

    if(x-size/2<=0 || x+size/2>=width){
        speedx *=-1;
    }
    if(y-size/2<=0 || y+size/2>=width){
        speedy *=-1;
    }

    x += speedx;
    y += speedy;
    
    noStroke();
    circle( x, y, size);
}
