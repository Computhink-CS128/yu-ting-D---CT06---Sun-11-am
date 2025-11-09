// write your codes here
let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];

let attempts = 0; 
let randWord = ""; 
let textBox; 
let button; 
let textDis; 
let message; 
let hiddenWord; 
let score = 0;

function setup() {
    createCanvas(600, 400); 

    textBox = createInput(); 
    textBox.position(width/2-textBox.width/2, 200); 

    button = createButton('rescramble'); 
    button.position(width/2-textBox.width/2 + textBox.width + 30, 200);
    button.mousePressed(checkGuess); 

    button2 = createButton('submit'); 
    button2.position(textBox.x-button2.width-30, 200);
    button2.mousePressed(scrambleWord); 

   randWord = random(words);  
   console.log(randWord);
}

function draw() {

    background(220); 
    textAlign(CENTER, CENTER); 
    textSize(24); 
    text("unscramble za Word >:3", width/2, 50); 
    text("score: " + score, width/2, 100); 
    text("Hint: " + hiddenWord, width/2, 150); 
    text(message, width/2, 250); 


}

function checkGuess() {
    attempts++; 

    let guess = textBox.value().toLowerCase(); 
    message = getCorrectLetters(guess, randWord); 

    if(guess == randWord) {
        message = "starclan blessed u, the word was:  " + randWord; 
    } else {
        message = "letters starclan says is correct: " + message; 
    }


}

function getCorrectLetters(guess, randWord) {
    let correctLetters = ""; 

    for (let i =0; i<randWord.length; i++) {
        if(randWord.includes(guess[i]) && !correctLetters.includes(guess[i].toUpperCase())) {
            correctLetters +=guess[i].toUpperCase(); 
        }
    }
    return correctLetters; 
}

function scrambleWord(){
    let arr = words.split('');

    for(leti=0;i>0;i--){
        let j=floor(random(i+1));
        arr[i],arr[j] = [arr[j],arr[i]];
    }

    return arr.join('');
}

function pickNewWord(){
    randWord.lod
}