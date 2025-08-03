// let spacing = 50;
// //let colorValue = 0;

// function setup() {
//     createCanvas(600, 400);
//     background(220);
//     // noLoop(); // Stops continuous drawing
//   }
  
// function draw() {
//   // Recap 1: Repeating Circles
// //   fill(0,0,255)
// // circle(75,200,100);
// // circle(225,200,100);
// // circle(375,200,100);
// // circle(525,200,100);

// // for (let i = 0; i<10; i++){
// //   // fill(0,0,i * spacing)
// //   // circle(spacing + spacing*50,200,40);
// //   fill(colorValue%255);
// //   circle(spacing + i*spacing,200,40);
// //   colorValue += 1;


//   // Task 1: Colour Gradient

//   // Task 2: Colour Loop
// for (let i = 0; i<10; i++){
//   if(i%2 === 0){
//     fill(0);
//   }
//   else {
//     fill(255);
//   }
// }
//   circle(spacing + i*spacing,200,40);
//   rect(spacing + i*spacing,250,50,50);



//   // Task 3: Row of Circles

//   // Task 4: Grid of Circles


// }

// let spacing = 80; 
// // let colorValue = 0;

let width = 600
let hight = 600

function setup() {
    createCanvas(600, 600);
    background(220);
    //no loop();
}

function draw() {
//     // fill(0, 0, 255);
//     // circle(75, 200, 100);
//     // circle(225, 200, 100);
//     // circle(375, 200, 100);
//     // circle(525, 200, 100);

//     for(let i = 0; i<5; i++) {
//         //fill(i*50); //fill(r, g, b)
//         //fill(0,0,i*spacing);
//         // fill(colorValue%255);
//         if(i%2 === 0) {
//             fill(0);
//         } else {
//             fill(255);
//         }
//         circle(spacing + i*spacing, 200, 40);
//         rect(spacing + i*spacing, 250, 50, 50);
        
//         // colorValue +=1; // colorValue = colorValue + 1;
//     }

rect(0,100,width,width-100)
circle(width/2, hight/2,100)

}

