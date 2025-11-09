// write your codes here

let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];
let attempts =0;
let randWord ="";
let textBox;
let button;
let textDis;
let message;

    function setup() {
        createCanvas(600,400);

        textBox=createInput();
        textBox.position(width/2-textBox.width/2,200);

        button=createButton('guess');
        button.position(width/2-textBox.width/2+textBox.width+30,200);
        button.mousePressed(checkGuess);

        randWord = random(words)
        randWord = randWord[0].toUpperCase()+" "+"_ ".repeat(randWord.length-1)
    }

    function draw(){
        textAlign(CENTER,CENTER)
        text("Guess za word :D",width/2,50);
        text("attempz: " +attempts,width/2,100);
        text("hint: "+ randWord,width/2,150);
        text(textDis,width/2,250);
    }

    function display(){

        textDis = textBox.value();

    }

    function checkGuess(){
        attempts++;

        let guess = textBox.value().toLowerCase();
        message = getCorrectLetters(guess,hiddenWord);

        if(guess == hiddenWord){
            message = "correct" + hiddenWord;
        } else if(guess.length != 5){
            message= "FIVE LETTERS ONLY FOR STARCLANS SAKE >:("
        } else {
            message = "Try again :D"
        }

    }

    function getCorrectLetters(guess,hiddenWord){
        let correctLetters = ""

        for(let i =0;i<hiddenWord.length;i++){
            
        }
    }