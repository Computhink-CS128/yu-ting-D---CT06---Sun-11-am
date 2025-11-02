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

// let textBox1,textBox2,textBox3,textBox4,textBox5;
// let arr = ["enter noun:","enter verb:","enter adjective:","enter adverb:","enter place:"];
// let button;
// let displayText1,displayText2,displayText3,displayText4,displayText5;
// let arr2 = [];

// function setup(){

//     createCanvas(600,600)

//     textBox1 = createInput();
//     textBox1.position(width/2-textBox1.width/2,50);

//     textBox2 = createInput();
//     textBox2.position(width/2-textBox2.width/2,100);

//     textBox3 = createInput();
//     textBox3.position(width/2-textBox3.width/2,150);

//     textBox4 = createInput();
//     textBox4.position(width/2-textBox4.width/2,200);

//     textBox5 = createInput();
//     textBox5.position(width/2-textBox5.width/2,250);

//     button= createButton('Generate Story');
//     button.position(width/2-button.width/2,300);
//     button.mousePressed(display);
// }

// function draw(){
//     background(220);

//     textSize(15);
//     for(let i=0; i<arr.length;i++){    
//         text(arr[i],50,50+i*50+15);
//     }

//     for(let i=0; i<arr2.length;i++){    
//         text(arr2[i],50,350+i*50);
//     }
// }

// function display(){
//     displpayText1 = "Noun: " + textBox1.value();
//     arr2.push(displayText1);
//     // console.log(displayText1)

//     displpayText2 = "Verb: " + textBox2.value();
//     arr2.push(displayText2);
//     // console.log(displayText2)

//     displpayText3 = "Adjective: " + textBox3.value();
//     arr2.push(displayText3);
//     // console.log(displayText3)

//     displpayText4 = "Adverb: " + textBox4.value();
//     arr2.push(displayText4);
//     // console.log(displayText4)

//     displpayText5 = "place: " + textBox5.value();
//     arr2.push(displayText5);
//     // console.log(displayText5)
// }

/////////////////////////////////////////////////////////////////////


// let textBox1, textBox2, textBox3, textBox4, textBox5;
// let arr = ["Enter a noun:", "Enter a verb:", "Enter an adjective:", "Enter an adverb:", "Enter a place:"]; 
// let button; 
// let displayText1, displayText2, displayText3, displayText4, displayText5; 
// let arr2 = []; 



// function setup() {
//     createCanvas(600, 600); 

//     textBox1 = createInput(); 
//     textBox1.position(width/2-textBox1.width/2, 50); 
//     textBox1.size(150, 30); 

//     textBox2 = createInput(); 
//     textBox2.position(width/2-textBox2.width/2, 100); 
//     textBox2.size(150, 30); 

//     textBox3 = createInput(); 
//     textBox3.position(width/2-textBox3.width/2, 150); 
//     textBox3.size(150, 30); 

//     textBox4 = createInput(); 
//     textBox4.position(width/2-textBox4.width/2, 200); 
//     textBox4.size(150, 30); 

//     textBox5 = createInput(); 
//     textBox5.position(width/2-textBox5.width/2, 250); 
//     textBox5.size(150, 30); 

//     button = createButton('Generate Story'); 
//     button.position(width/2 - button.width/2,300); 
//     button.mousePressed(display); 

// }

// function draw() {
//     background(220); 
//     textSize(15); 
//     for(let i=0; i<arr.length; i++) {
//         text(arr[i], 50, 50+i*50 + 20);
//     }

//     for(let i=0; i<arr2.length; i++) {
//         text(arr2[i], 50, 350 + i*50); 
//     }
    
    
// }

// function display() {
//     displayText1 = "Noun: " + textBox1.value(); 
//     arr2.push(displayText1); 

//     displayText2 = "Verb: " + textBox2.value(); 
//     arr2.push(displayText2); 

//     displayText3 = "Adjective: " + textBox3.value(); 
//     arr2.push(displayText3); 

//     displayText4 = "Adverb: " + textBox4.value(); 
//     arr2.push(displayText4); 

//     displayText5 = "Place: " + textBox5.value(); 
//     arr2.push(displayText5); 


// }
////////////////////////////////////////////////////////////////////////////////////////////////////

//task 2

let textBox1, textBox2, textBox3, textBox4, textBox5;
let arr = ["Enter a noun:", "Enter a verb:", "Enter an adjective:", "Enter an adverb:", "Enter a place:"]; 
let button; 
let displayText1, displayText2, displayText3, displayText4, displayText5; 
let arr2 = []; 
let storyText = "";
let storyTemplates = [
        "The {adj} {noun} decided to {verb} {adv} at the {place}.",
        "One day, a {adj} {noun} wanted to {verb} {adv} in {place}.",
        "Did you hear about the {adj} {noun} that tried to {verb} {adv} near {place}?"
    ];

function setup() {
    createCanvas(600, 600); 

    let template = random(storyTemplates)

    textBox1 = createInput(); 
    textBox1.position(width/2-textBox1.width/2, 50); 
    textBox1.size(150, 30); 

    textBox2 = createInput(); 
    textBox2.position(width/2-textBox2.width/2, 100); 
    textBox2.size(150, 30); 

    textBox3 = createInput(); 
    textBox3.position(width/2-textBox3.width/2, 150); 
    textBox3.size(150, 30); 

    textBox4 = createInput(); 
    textBox4.position(width/2-textBox4.width/2, 200); 
    textBox4.size(150, 30); 

    textBox5 = createInput(); 
    textBox5.position(width/2-textBox5.width/2, 250); 
    textBox5.size(150, 30); 

    button = createButton('Generate Story'); 
    button.position(width/2 - button.width/2,300); 
    button.mousePressed(display); 

    storyText = template.replace("{noun}",displayText1)
                        .replace("{noun}",displayText2)
                        .replace("{noun}",displayText3)
                        .replace("{noun}",displayText4)
                        .replace("{noun}",displayText5)

}

function draw() {
    background(220); 
    textSize(15); 
    for(let i=0; i<arr.length; i++) {
        text(arr[i], 50, 50+i*50 + 20);
    }

    for(let i=0; i<arr2.length; i++) {
        text(arr2[i], 50, 350 + i*50); 
    }
    
    
}

function display() {
    displayText1 = textBox1.value(); 
    arr2.push(displayText1); 

    displayText2 = textBox2.value(); 
    arr2.push(displayText2); 

    displayText3 = textBox3.value(); 
    arr2.push(displayText3); 

    displayText4 = textBox4.value(); 
    arr2.push(displayText4); 

    displayText5 = textBox5.value(); 
    arr2.push(displayText5); 


}