let spacing = 50
let width = 600
let height = 400


function setup() {
    createCanvas(600, 400);
    background(220);
    //noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
//   fill(0,0,255)
// circle(75,200,100);
// circle(225,200,100);
// circle(375,200,100);
// circle(525,200,100);
// for (let i = 0; i<10; i++){
//   fill(0,0,i * spacing)
//   circle(spacing + i*spacing,200,40);

  //circle(spacing + i*spacing,200,40);

  // Task 1: Colour Gradient
  // Task 2: Colour Loop

  // Task 3: Row of Circles
//  rect(0,100,width,200);
//  cricle(width/2, height/2, 100);
let diameter = 50;
let numCircles = 5;
let totalwidth = diameter*numCircles;
// let startX = (width - totalwidth)/2 + diameter/2;
// let startY = (height - totalwidth)/2 + diameter/2;
let startX = diameter/2;
let startY = diameter/2;


for(let j=0; j<numCircles; j++){
  let y = startY + j*diameter

  for(let i =0; i<numCircles ; i++ ){
    circle(startX + i*diameter , y, diameter);

  }
}
  // Task 4: Grid of Circles

}
