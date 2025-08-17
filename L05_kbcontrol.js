// write your codes here

let shapeColor = 'lime';
let circleSize = 5;

function setup() {
    createCanvas(400,400);
    background(220)
    noStroke();
    
}


// function mousePressed() {
//     fill(random(255),random(255),random(255));
//     circleSize =5;
// }

// function mouseDragged() {
//     fill(shapeColor);
//     ellipse(mouseX,mouseY , circleSize,circleSize);
//     circleSize += 0.000001;
// }

// let recSize = 50;
// function draw() {
//     background(220);

//     let centerX = width/2;
//     let centerY = height/2;

//     let topLeftX = centerX - recSize/2
//     let topLeftY = centerY - recSize/2

//     rect(topLeftX,topLeftY, recSize,recSize)
// }


function keyPressed(){
    let count = random(5,21)

}
function keyReleased(){
    background(220)
}