// write your codes here

let shapeColor = 'blue'
let circleSize = 5

function setup() {
    createCanvas(600,600);
    background(220)
    
}


function mousePressed() {
    fill(random(255),random(255),random(255));
    circleSize =5;
}

function mouseDragged() {
    fill(shapeColor)
    ellipse(mouseX,mouseY , circleSize,circleSize)
    circleSize += 0.2
}