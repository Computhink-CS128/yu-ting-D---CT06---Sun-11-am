// write your codes here

let textBox;
let display
let textColourPicker;

function setup(){
    createCanvas(400,400);

    textBox = createInput();
    textBox.position(50,50);
    textBox.size(150,30)
    textBox.input(displayText);
}

function draw(){
    background(220);

    textSize(24);
    

}

function displayText(){
    display = this.value();
}