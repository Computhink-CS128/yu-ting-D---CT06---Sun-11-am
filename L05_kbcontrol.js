// write your codes here

let shapeColor = 'blue';
let circleSize = 5;

function setup() {
    createCanvas(800,800);
    background(220)
    noStroke();
    
}


function mousePressed() {
    fill(random(255),random(255),random(255));
    circleSize =5;
}

function mouseDragged() {
    // fill(shapeColor);
    fill(random(255),random(255),random(255));
    ellipse(mouseX,mouseY , circleSize,circleSize);
    circleSize += 0.5;
}