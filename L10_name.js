// write your codes here

// let interval;
// let bgColor = 220;

// function setup() {
//     createCanvas(400,400);
//     textAlign(CENTER,CENTER);

//     interval = setInterval(countdown,1000);
// }
// function draw() {
//     background(bgColor)

//     let s = 59-second();
//     textSize(50);
//     text(s,width/2,height/2);
    
// }

// function countdown() {
//     bgColor= color(random(255),random(255),random(255));

// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let imputText;
// let userText = "text shown here";

// function setup() {
//     createCanvas(600,400);

//     imputText = createInput();
//     imputText.position(width/2,height-100);
//     imputText.input(updateText);
//     imputText.size(150,50);
// }

// function draw() {
//     background(220);
//     text('enter text here',50,height-80);
//     text(userText,width/2,height/2);
// }

// function updateText() {
//     userText = this.value();
// }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let colorPicker;

// function setup(){
//     createCanvas(600,400);

//     colorPicker = createColorPicker('orange');
//     colorPicker.position(width/2-50,height-50);
// }

// function draw(){
//     background(colorPicker.value());

//     textAlign(LEFT,BOTTOM);
//     text("Pick A Colour Background XD:",50 ,colorPicker.y+20);

//     rect(50,100,500,160,50)

// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let imputText;
// let userText = "text shown here";

function setup() {
    createCanvas(600,400);

    // imputText = createInput();
    // imputText.position(width/2,height-100);
    // imputText.input(updateText);
    // imputText.size(150,50);
}

// function draw() {
//     // background(220);
//     // text('enter text here',50,height-80);
//     // text(userText,width/2,height/2);
// }

// function updateText() {
//     userText = this.value();
// }

let colorPicker;
let colorPickerText;
let imputText;
let userTextName = "your name";
let inputAge;
let userTextAge = "your age"

function setup(){
    textAlign(CENTER,CENTER)
    createCanvas(600,400);

    colorPicker= createColorPicker('orange');
    colorPicker.position(width/2-50,height-30);

    colorPickerText = createColorPicker('pink');
    colorPickerText.position(width/2-50,height-70);

    imputText = createInput();
    imputText.position(width/2-50,height-90);
    imputText.input(updateText);
    imputText.size(150,10);

    imputAge = createInput();
    imputAge.position(width/2-50,height-115);
    imputAge.input(updateTextAge);
    imputAge.size(150,10);
}

function draw(){
    background(colorPicker.value());

    textAlign(LEFT,BOTTOM);
    text("Pick A Background Colour XD:",50 ,colorPicker.y+20);

    textAlign(LEFT,BOTTOM);
    text("Pick A Text Colour XD:",50 ,colorPickerText.y+30);

    fill(255,255,255)
    rect(50,100,500,160,50)

    textAlign(CENTER,CENTER)
    fill(colorPickerText.value())
    text('enter name',200,height-80);
    text(userTextName,width/2,height/2-30);

    fill(colorPickerText.value())
    textAlign(CENTER,CENTER)
    text('enter age',200,height-100);
    text(userTextAge,width/2,height/2);

}

function updateText() {
    userTextName = this.value();
}
function updateTextAge() {
    userTextAge = this.value();
}