// let arr = ["pizza","maccoron","pies","chocolate"];

// function setup() {
//     createCanvas(600 , 400);
//     background(0);
// }

// function draw() {
//     fill("orange");
//     textAlign(CENTER,CENTER);
//     textSize(24);

//     for (let i=0; i<arr.length; i++) {
//     text(arr[i], width/2, 100 + i*50);
//     }
// }
////////////
function setup(){
    createCanvas(600 , 400);
}

let x = 600/2
let y = 400/2
let xSpeed = 5

function draw() {
    background("lightblue");

    if(x-50/2<=0 || x+50/2>600){
        xSpeed *=-1;
    }
    x +=xSpeed;

    fill(225,0,0)
    noStroke();
    circle(x,y,50);
}