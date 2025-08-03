let spacing = 50;
let colorValue = 0;

function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
//   fill(0,0,255)
// circle(75,200,100);
// circle(225,200,100);
// circle(375,200,100);
// circle(525,200,100);
for (let i = 0; i<10; i++){
  // fill(0,0,i * spacing)
  // circle(spacing + spacing*50,200,40);
  fill(colorValue%255);
  circle(spacing + i*spacing);
}
  circle(50 + i*50,200,40);

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles


}