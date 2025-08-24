// write your codes here

// let shapeColor = 'lime';
// let circleSize = 5;

// function setup() {
//     createCanvas(400,400);
//     background(220)
//     noStroke();
    
// }


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


// function keyPressed(){
//     let count = floor(random(5,21));

//     for(let i=0; i<count ; i++){
//         let size = floor(random(10,80));
//         let x = random(size/2, width - size/2)
//         let y = random(size/2, height - size/2)
//         fill(random(255),random(255),random(255));
//         ellipse(x , y ,size,size );
//     }

// }
// function keyReleased(){
//     background(220);
// }

// let a= 5;
// let b ="5";
// let c =234567

// console.log(a===b)

let showCircle = false

function setup() {
    createCanvas(400,400);
    background(220)
    noStroke();
    
}

function draw() {
    background(220);
    if(sh)
    circle(width/2,height/2,100)

}

function keyPressed(){
    if (key == 'c'){
        showCircle = !showCircle
    }
}