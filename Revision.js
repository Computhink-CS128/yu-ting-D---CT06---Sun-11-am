function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // rect(600/2 ,400/2 ,50 ,50)

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
}