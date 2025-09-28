// write your codes here
let 
function setup() {
    createCanvas(600,600);

    fill(255,255,0);
    textSize(24);
    textAlign(CENTER);
    ypos = height;
}

function draw(){
    background(0);

    for (let i=0; i<favFood.length; i++) {
        text(st[i], width/2,ypos + i*50);
    }
    ypos -= 4;
}