// write your codes here

let shapeColor = 'blue'

function setup() {
    createCanvas(600,600);
    background(220)
    
}

function draw() {
//     for (let i=0 ; i<5;i++){
//         // fill(0, i*50, 0)
//         // circle(50 + i*50, 50 +i*50, 50)
//         fill(shapeColor);
//         circle(width/2, height/2, 100);

//     }
} 

// function mousePressed() {
// //     shapeColor = 'red';
//     shapeColor = color(random(255), random(255), random(255));
    fill(random(255),random(255),random(255))
    circle(mouseX,mouseY,30,30);
// }

// function mouseReleased() {
//     shapeColor = 'white';
//     // shapeColor = color(random(255), random(255), random(255));
// }

function mouseMoved() {
    fill(random(255),random(255),random(255))
    circle(mouseX,mouseY,30,30);
}