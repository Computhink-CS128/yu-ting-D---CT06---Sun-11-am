// write your codes here

// let colorPicker;
// let textBox;
// let display;
// let textColourPicker;

// function setup(){
//     createCanvas(400,400);

//     textBox = createInput();
//     textBox.position(50,50);
//     textBox.size(150,30);
//     textBox.input(displayText);

//     colorPicker= createColorPicker('orange');
//     colorPicker.position(50, 100);
// }

// function draw(){
//     background(220);

//     fill(colorPicker.value())
//     textAlign(LEFT);
//     textSize(24);
//     text(display,50,height/2);

// }

// function displayText(){
//     display = this.value();
// }
//////////////////////////////////////////////////////////////////////////////////////////

let textBox;
let button;
let displayText

function setup(){
    createCanvas(400,400);

    textBox = createInput();
    textBox.position(100,50);

    button= createButton('bite o 87');
    button.position(textBox.x+textBox.width+30,50);
    button.mousePressed(display);
}

function draw(){
    background(220);

}

function display(){
    displayText
}