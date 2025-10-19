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

// let textBox;
// let button;
// let displayText = "random text here"

// function setup(){
//     createCanvas(400,400);

//     textBox = createInput();
//     textBox.position(100,50);

//     button= createButton('bite o 87');
//     button.position(textBox.x+textBox.width+30,50);
//     button.mousePressed(display);
// }

// function draw(){
//     background(220);

//     textAlign(CENTER,CENTER);
//     textSize(30);
//     text(displayText,width/2,height/2);
// }

// function display(){
//     displayText= textBox.value();
// }
////////////////////////////////////////////////////////////////////////////////

let textBox1,textBox2,textBox3,textBox4,textBox5;
let arr = ["enter noun:","enter verb:","enter adjective:","enter adverb:","enter place:"]
let button;
let displayText1,displayText2,displayText3,displayText4,displayText5;
let arr2 = [''];

function setup(){

    createCanvas(600,600)

    textBox1 = createInput();
    textBox1.position(width/2-textBox1.width/2,50);

    button= createButton('Generate Story')
    button.postition(width/2-button.width/2,300);
    button.mousePressed(display);
}

function draw(){
    background(220);

    textSize(20);
    for(let i=0; i<arr.length;i++){    
        text(arr[i],50,50+i*50+15);
    }
       
    textSize(20);
    for(let i=0; i<arr.length;i++){    
        text(arr[i],50,50+i*50+15);
    }
}

function display(){
    displpayText1 = textBox1.value();
    arr2.push(displayText1);
}